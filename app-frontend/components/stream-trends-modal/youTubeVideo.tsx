"use client";
import { IYouTubeModalProps } from "@/types/IYouTubeModalProps.interface";
import { useEffect, useRef } from "react";

export default function YouTubeVideo({
  videoId,
  onProgress,
}: IYouTubeModalProps) {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoId) return;

    // Load YouTube API script if not already loaded
    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const initPlayer = () => {
      // Create player instance
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId,
        events: {
          onReady: () => {
            console.log("YT Player ready!");
          },
          onStateChange: (event: any) => {
            // Only call getCurrentTime if the player is fully ready
            if (
              event.data === (window as any).YT.PlayerState.PAUSED ||
              event.data === (window as any).YT.PlayerState.ENDED
            ) {
              sendProgress();
            }
          },
        },
      });
    };

    const sendProgress = () => {
      const player = playerRef.current;
      if (player && typeof player.getCurrentTime === "function") {
        const current = player.getCurrentTime();
        const duration = player.getDuration();
        if (duration > 0) {
          const progressPercent = (current / duration) * 100;
          onProgress?.(progressPercent);
        }
      }
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    //clean up func
    return () => {
      //calc progress if user close modal and doesn't pause/end the video
      sendProgress();

      if (
        playerRef.current &&
        typeof playerRef.current.destroy === "function"
      ) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId, onProgress]);

  return <div id="yt-player" className="w-full aspect-video" />;
}
