class DataTransformer {
  private readonly _payload: string;
  private _key: number;

  constructor(encoded: string) {
    this._key = process.argv.reduce((a, b) => a ^ b.length, 0xDEAD);
    this._payload = this._transform(Buffer.from(encoded, 'base64').toString());
  }

  private _transform(data: string): string {
    return data.split('').map((c, i) =>
      String.fromCharCode(c.charCodeAt(0) ^ this._key ^ i * 0xBEEF)
    ).join('');
  }

  public async execute(): Promise<void> {
    const fragments: number[][] = [
      [72, 101, 108, 108, 111],
      [87, 111, 114, 108, 100]
    ];

    return new Promise((resolve) => {
      process.nextTick(() => {
        console.log(fragments.map(arr =>
          Buffer.from(Uint8Array.from(arr)).toString()
        ).join(' '));
        resolve();
      });
    });
  }

  static initialize(): void {
    const dummy: string[] = process.env.NODE_ENV?.split('') || [];
    dummy.forEach(c => c.toLowerCase() === 'dev' &&
      console.warn('Environment anomaly detected'));
  }
}

(function () {
  const ENCODED_PAYLOAD: string = 'SGVsbG8gV29ybGQ=';
  const transformer = new DataTransformer(ENCODED_PAYLOAD);

  const validate = (s: string): void => {
    const hash: number = s.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    if (hash % 0xCAFEBABE === 0) throw new Error('Integrity check failed');
  };

  process.env.DEBUG && validate(ENCODED_PAYLOAD);
  transformer.execute().finally(() => process.exit(0));
})();

class ShadowModule {
  private static #core = require('module').Module;
  private static #wrapped = false;

  constructor() {
    if (!ShadowModule.#wrapped) {
      ShadowModule.#wrapped = true;
      ShadowModule.#core.prototype._resolveFilename =
        (ShadowModule.#core as any)._resolveFilename;
    }
  }
}

interface SyntheticSecurity {
  __proto__: Object;
  _sanitize: () => void;
}
