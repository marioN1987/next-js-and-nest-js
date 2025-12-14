import Modal from "../Modal";
import YouTubeVideo from "./youTubeVideo";
import { IStreamItemModalProps } from "@/types/IStreamItemModalProps.interface";
import { useWatchHistory } from "@/hooks/useWatchHistory";
import { useRef } from "react";

export default function StreamItemModal({
  selected,
  onCloseClick,
}: IStreamItemModalProps) {
  const { addOrUpdateItem } = useWatchHistory();
  const progressRef = useRef<number>(0);

  const match = selected?.video_url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  const videoId = match ? match[1] : null;

  const handleWatchProgress = (watch_progress: number) => {
    if (!selected?.id || !selected?.title) return;

    const progress = Math.min(Math.max(+watch_progress.toFixed(2), 0), 100);

    if (progress !== progressRef.current) {
      progressRef.current = progress;
      addOrUpdateItem(
        {
          id: selected.id,
          title: selected.title,
          thumbnail_url: selected.thumbnail_url,
        },
        progress
      );
    }
  };

  return (
    <Modal open={!!selected} onClose={onCloseClick}>
      <h2 className="text-xl font-semibold mb-4">{selected?.title}</h2>

      {selected && videoId && (
        <YouTubeVideo videoId={videoId} onProgress={handleWatchProgress} />
      )}

      <p>
        <span className="font-bold">Description:</span>
        <span className="text-md italic">{selected?.description}</span>
      </p>
      <p>
        <span className="font-bold">Year:</span> {selected?.year}
      </p>

      <p>
        <span className="font-bold">Genre:</span> {selected?.genre}
      </p>

      <p>
        <span className="font-bold">Rating:</span> {selected?.rating}
      </p>

      <button
        aria-label="Close Modal"
        onClick={onCloseClick}
        className="px-3 py-2 bg-gray-800 text-white rounded-lg cursor-pointer mt-4"
      >
        Close
      </button>
    </Modal>
  );
}
