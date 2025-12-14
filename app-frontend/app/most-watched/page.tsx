"use client";

import { useEffect, useMemo, useState } from "react";
import RenderMostWatched from "./renderMostWatched";
import { IWatchHistoryProps } from "@/types/IWatchHistoryProps.interface";
import { getTop5MostWatched, getWatchHistory } from "@/helper/helperMethods";

export default function MostWatched() {
  const [history, setHistory] = useState<IWatchHistoryProps[]>([]);

  const wacthHistoryFunc = () => {
    const historyList = getWatchHistory();
    setHistory(historyList ?? []);
  };

  useEffect(() => {
    wacthHistoryFunc();

    const interval = setInterval(() => {
      wacthHistoryFunc();
    }, 10_000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const top5 = useMemo(() => getTop5MostWatched(history), [history]);

  return (
    <section id="most-watched" className="mx-5">
      <h2 className="text-4xl font-bold mt-10 ml-5 mb-5 border-b-2 border-black-500 w-fit">
        Top 5 most watched
      </h2>
      <div className="overflow-x-auto mx-auto">
        <div className="flex flex-row gap-x-4 w-max">
          {history && <RenderMostWatched items={top5} />}
        </div>
      </div>
    </section>
  );
}
