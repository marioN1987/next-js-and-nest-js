"use client";

import { useState } from "react";
import { IStreamingContentProps } from "@/types/IStreamingContentProps.interface";
import StreamItemModal from "../../components/stream-trends-modal/streamItemModal";

export function StreamItems({ items }: { items: IStreamingContentProps[] }) {
  const [selected, setSelected] = useState<IStreamingContentProps | null>(null);

  const handleOnCloseClick = () => {
    setSelected(null);
  };

  return (
    <>
      {/* don't render until stream clicked */}
      {selected && (
        <StreamItemModal
          key={selected?.id}
          selected={selected}
          onCloseClick={handleOnCloseClick}
        />
      )}

      {items?.map((streamItem: IStreamingContentProps, index: number) => (
        <div
          key={streamItem.id}
          className="mx-2 my-2 relative transition hover:scale-105 cursor-pointer"
          onClick={() => setSelected(streamItem)}
        >
          <div className="w-[200px] h-full">
            <img
              className="rounded-md fill h-full"
              src={streamItem.thumbnail_url}
              alt={streamItem.title}
              loading="lazy"
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
