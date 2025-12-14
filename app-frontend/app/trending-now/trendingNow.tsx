import { Suspense } from "react";
import loadingGif from "@/public/loading.gif";
import StreamContentPromise from "./streamContentPromise";
import Image from "next/image";

export default function TrendingNow() {
  return (
    <section id="trending" className="mx-5">
      <h2 className="text-4xl font-bold mt-10 ml-5 mb-5 border-b-2 border-black-500 w-fit">
        Trending Now
      </h2>

      <div className="overflow-y-auto mx-auto">
        <div className="flex flex-row gap-x-4">
          {/* suspense works on server components only,
              For <Suspense fallback="…"> to activate, it must receive an 
              unresolved Promise from inside the component tree.
           */}
          <Suspense
            fallback={
              <Image
                priority
                className="w-fit mx-auto"
                alt="loading"
                src={loadingGif.src}
                width={20}
                height={20}
              />
            }
          >
            <StreamContentPromise />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
