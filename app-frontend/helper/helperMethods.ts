import { IStreamingFormErrors } from "@/types/IStreamingFormErrorsPropr.interface";
import { IWatchHistoryProps } from "@/types/IWatchHistoryProps.interface";

export function extractErrMessage(list: IStreamingFormErrors[], colName: string) {
  return list.find((obj: IStreamingFormErrors) => obj.colName === colName)
    ?.message;
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getTop5MostWatched(
  history: IWatchHistoryProps[]
): IWatchHistoryProps[] {
  return [...history]
    .filter(item => typeof item.progress === "number")
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 5);
}

const WATCH_HISTORY_KEY = "watch_history";
export function getWatchHistory() {
    const stored = localStorage.getItem(WATCH_HISTORY_KEY);

    if (!stored) return;

    return JSON.parse(stored) as IWatchHistoryProps[];
}