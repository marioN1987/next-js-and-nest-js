import { IStreamingContent } from "@/types/IStreamingContent.interface";
import Modal from "../Modal";
import styles from "./streamItemModal.module.css";

export default function StreamItemModal({
  selected,
  onCloseClick,
}: {
  selected: IStreamingContent | null;
  onCloseClick: () => void;
}) {
  let embedUrl = null;
  const matchYoutubeUrl = selected?.video_url.match(
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/
  );

  if (!matchYoutubeUrl) {
    console.log("Invalid YouTube URL");
    embedUrl = selected?.video_url;
  } else {
    embedUrl = `https://www.youtube.com/embed/${matchYoutubeUrl[1]}`;
  }

  return (
    <Modal open={!!selected} onClose={onCloseClick}>
      <h2 className="text-xl font-semibold mb-4">{selected?.title}</h2>
      <iframe
        width="auto"
        height="auto"
        className={styles.streamIframe}
        src={embedUrl}
        title={selected?.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p>{selected?.description}</p>

      <button
        onClick={onCloseClick}
        className="px-3 py-2 bg-gray-800 text-white rounded-lg cursor-pointer mt-4"
      >
        Close
      </button>
    </Modal>
  );
}
