"use client";

import { useState } from "react";
import Modal from "../Modal";
import { IStreamingContent } from "@/types/IStreamingContent.interface";
import StreamItemModal from "./streamItemModal";

interface RenderStreamListClientProps {
  items: IStreamingContent[];
}

export function StreamItems({ items }: RenderStreamListClientProps) {
  const [selected, setSelected] = useState<IStreamingContent | null>(null);

  const handleOnCloseClick = () => {
    setSelected(null);
  };

  return (
    <>
      <StreamItemModal
        key={selected?.id}
        selected={selected}
        onCloseClick={handleOnCloseClick}
      />

      {items?.map((streamItem: IStreamingContent) => (
        <div
          key={streamItem.id}
          className="mx-2 my-2 relative transition hover:scale-105 cursor-pointer"
          onClick={() => setSelected(streamItem)}
        >
          <div className="w-[200px] h-full image">
            <img
              className="rounded-md fill h-full"
              src={streamItem.thumbnail_url}
              alt={streamItem.title}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 mx-auto bg-black rounded-b-md z-10 streaming-details">
            <p className="text-white font-bold text-center">
              {streamItem.title}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
