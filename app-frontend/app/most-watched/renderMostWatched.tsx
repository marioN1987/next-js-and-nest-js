import { IWatchHistoryProps } from "@/types/IWatchHistoryProps.interface";
import { ProgressBar } from "./progressBar";

export default function RenderMostWatched({
  items,
}: {
  items: IWatchHistoryProps[];
}) {
  return items.length > 0 ? (
    items.map((stream: IWatchHistoryProps, index: number) => (
      <div key={stream.id} className="w-[200px] h-auto fill relative">
        <img
          src={stream.thumbnail_url}
          className="rounded-md fill h-full"
          alt={stream.title}
          title={stream.title}
          loading="lazy"
        />
        <ProgressBar progress={stream.progress} />
      </div>
    ))
  ) : (
    <p className="text-xl italic">Wacth video from trending now section.</p>
  );
}
