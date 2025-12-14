import { IWatchHistoryProps } from "@/types/IWatchHistoryProps.interface";
import { useEffect, useCallback } from "react";

const WATCH_HISTORY_KEY = "watch_history";

export function useWatchHistory() {
  // Load on mount
  useEffect(() => {
    const stored = localStorage.getItem(WATCH_HISTORY_KEY);
    if (!stored) localStorage.setItem(WATCH_HISTORY_KEY, JSON.stringify([]));
  }, []);

  // Add or update progress
  const addOrUpdateItem = useCallback(
    (item: Omit<IWatchHistoryProps, "progress">, progress: number) => {
      const stored = localStorage.getItem(WATCH_HISTORY_KEY);
      const prev: IWatchHistoryProps[] = stored ? JSON.parse(stored) : [];

      const existing = prev.find((i) => i.id === item.id);
      let newHistory: IWatchHistoryProps[];
      if (existing) {
        if (existing.progress === progress) return; // no change
        newHistory = prev.map((i) =>
          i.id === item.id ? { ...i, progress } : i
        );
      } else {
        newHistory = [{ ...item, progress }, ...prev];
      }

      localStorage.setItem(WATCH_HISTORY_KEY, JSON.stringify(newHistory));
    },
    []
  );

  const removeItem = useCallback((itemId: string | number) => {
    const stored = localStorage.getItem(WATCH_HISTORY_KEY);
    const prev: IWatchHistoryProps[] = stored ? JSON.parse(stored) : [];
    const newHistory = prev.filter((i) => i.id !== itemId);
    localStorage.setItem(WATCH_HISTORY_KEY, JSON.stringify(newHistory));
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.setItem(WATCH_HISTORY_KEY, JSON.stringify([]));
  }, []);

  return { addOrUpdateItem, removeItem, clearHistory };
}
