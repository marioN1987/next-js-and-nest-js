import { IStreamingFormErrors } from "@/types/IStreamingFormErrors.interface";

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

export async function loadStreamingContent() {
  const resp = await fetch("http://localhost:8080/api/streaming");
  const streamData = await resp.json();
  return streamData;
}
