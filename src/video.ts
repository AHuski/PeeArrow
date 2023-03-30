import { BackgroundToContentMessage } from "./types/messaging";
import { logError } from "./utils/logger";
import { ChannelIDInfo, checkIfNewVideoID, setupVideoModule, VideoID } from "@ajayyy/maze-utils/lib/video"
import Config from "./config";
import { SubmitButton } from "./submission/submitButton";
import { clearVideoBrandingInstances, replaceCurrentVideoBranding } from "./videoBranding/videoBranding";
import { getVideoBranding } from "./dataFetching";
import * as documentScript from "../dist/js/document.js";


export const submitButton = new SubmitButton();

async function videoIDChange(videoID: VideoID | null): Promise<void> {
    if (!videoID) return;

    replaceCurrentVideoBranding().catch(logError);
    
    try {
        const branding = await getVideoBranding(videoID, true);
        if (branding) {
            submitButton.setSubmissions(branding);
        }
    } catch(e) {
        logError(e);
    }
}

function resetValues() {
    submitButton.clearSubmissions();
    submitButton.close();

    clearVideoBrandingInstances();
}

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
function channelIDChange(channelIDInfo: ChannelIDInfo): void {
}

function videoElementChange(newVideo: boolean) {
    if (newVideo) {
        submitButton.attachToPage().catch(logError);
    }
}

function windowListenerHandler(event: MessageEvent) {
    const data = event.data;

    if (data.type === "newElement" && data.name === "ytd-badge-supported-renderer") {
        // Move unlisted badge up one if required
        const badges = document.querySelectorAll("ytd-badge-supported-renderer");
        for (const badge of badges) {
            if (badge && badge.parentElement?.id === "title" && badge.parentElement.parentElement) {
                const parent = badge.parentElement;
                parent!.parentElement!.insertBefore(badge, parent.nextSibling!);
            }
        }
    }
}

export function setupCBVideoModule(): void {
    chrome.runtime.onMessage.addListener((request: BackgroundToContentMessage) => {
        if (request.message === "update") {
            checkIfNewVideoID().catch(logError);
        }
    });

    setupVideoModule({
        videoIDChange: (videoID) => void videoIDChange(videoID).catch(logError),
        channelIDChange,
        videoElementChange,
        resetValues,
        windowListenerHandler,
        documentScript
    }, () => Config);
}