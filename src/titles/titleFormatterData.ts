export const titleCaseNotCapitalized = new Set([
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "nor",
    "for",
    "yet",
    "so",
    "as",
    "in",
    "of",
    "on",
    "to",
    "from",
    "into",
    "with",
    "w/",
    "upon",
    "at",
    "by",
    "via",
    "to",
    "vs",
    "v.s.",
    "vs.",
    "ft",
    "ft.",
    "feat",
    "feat.",
    "etc.",
    "etc"
]);

export const titleCaseDetectionNotCapitalized = new Set([
    ...titleCaseNotCapitalized,
    "it"
]);

export const allowlistedWords = new Set([
    "NASA",
    "osu!",
    "PETA",
    "DEFCONConference",
    "DEFCON",
    "HDHR",
    "HDDT",
    "HDDTHR",
    "TUYU",
    "umu.",
    "MIMI",
    "S3RL",
    "NOMA",
    "DECO*27",
    "EVO+",
    "VINXIS",
    "IOSYS",
    "fhána",
    "LGBT",
    "LGBTQ",
    "LGBTQIA",
    "LGBTQ+IA",
    "LGBTQ2S",
    "BIPOC",
    "STFU",
    "TLDR",
    "TOTK",
    "BOTW",
    "SAINTCON",
    "TASBOT",
    "FNAF",
    "IANA",
    "OSHA",
    "NAFTA",
    "SCOTUS",
    "CPAN",
    "SWAT",
    "USAF",
    "ADHD",
    "IONOS",
    "NORAD",
    "UNHRC",
    "LDAC",
    "NVENC",
    "HEVC",
    "NVBFC",
    "IMAX",
    "CUDA",
    "VAAPI",
    "JPEG",
    "IETF",
    "zstd",
    "LZMA",
    "ANOVA",
    "HEIF",
    "HTML",
    "HDTV",
    "HDMI",
    "EULA",
    "GDPR",
    "CCPA",
    "HTTP",
    "HTTPS",
    "BIOS",
    "DMCA",
    "GUID",
    "JSON",
    "MIDI",
    "MMORPG",
    "OLED",
    "RHEL",
    "SFTP",
    "PCIe",
    "SSID",
    "UEFI",
    "UUID",
    "VRAM",
    "XMPP",
    "YAML",
    "OWSLA",
    "DJVI",
    "PSYQUI",
    "INZO",
    "MYRNE",
    "KNOWER",
    "PYLOT",
    "USAO",
    "TESV",
    "WRLD",
    "LAPD",
    "NYPD",
    "NVMe",
    "WYSIWYG",
    "TAS",
    "USSR",
    "Yu-Gi-Oh!",
    "II",
    "III",
    "IV",
    "VI",
    "VII",
    "VIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "VIA",
    "CCCP",
    "DIY",
    "SNES",
    "INTV",
    "PICO-8",
    "PICO8",
    "WSWAN",
    "PCE",
    "PCECD",
    "FPGA",
    "GTA",
    "bell hooks",
    "TOOOL",
    "PCECD",
    "drawholic",
    "TF2",
    "L4D",
    "L4D2",
    "P/ECE",
    "CDROM",
    "CD-ROM",
    "EFF",
    "AAA",
    "IQ",
    "GEEKOM",
    "AI",
    "RVC",
    "DisplayPort",
    "BFDI",
    "BFDIA",
    "IDFB",
    "TPOT",
    "WWII",
    "CS2",
    "CS:GO",
    "CSGO",
    "SCART",
    "ASMR",
    "CNBC"
]);

export const acronymBlocklist = new Set([
    "not",
    "see",
    "be",
    "you",
    "are",
    "is",
    "it",
    "of",
    "the",
    "to",
    "new",
    "end",
    "won",
    "sue",
    "day",
    "fly",
    "so",
    "one",
    "two",
    "six",
    "ten",
    "can",
    "pro",
    "why",
    "did",
    "now",
    "too",
    "bad",
    "big"
]);

export const notStartOfSentence = new Set([
    "v.s.",
    "vs.",
    "ft.",
    "feat."
]);
