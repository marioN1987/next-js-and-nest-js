import { use } from "react";
import { fetchStreamingContent } from "@/utils/http";
import { IStreamingContent } from "@/types/IStreamingContent.interface";

export default function RenderStream() {
  //use() is a new React 18+ hook that allows Server Components to wait for (suspend on) a Promise directly during rendering.
  //For <Suspense fallback="…"> to activate, it must receive an unresolved Promise from inside the component tree.
  const streamingContent: IStreamingContent[] = use(fetchStreamingContent());

  return (
    <>
      {streamingContent?.map((streaming) => (
        <div
          key={streaming.id}
          className="mx-2 my-2 relative transition hover:scale-105 cursor-pointer"
        >
          <div className="w-[200px] h-full image">
            <img
              className="rounded-md fill h-full"
              src={streaming.thumbnail_url}
              alt={streaming.title}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 mx-auto bg-black rounded-b-md z-10 streaming-details">
            <p className="text-white font-bold text-center">
              {streaming.title}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
