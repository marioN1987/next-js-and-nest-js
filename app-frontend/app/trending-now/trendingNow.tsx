import { Suspense, use } from "react";
import loadingGif from "@/public/loading.gif";
import StreamContentPromise from "./streamContentPromise";

export default function TrendingNow() {
  return (
    <section id="trending">
      <h2 className="text-4xl font-bold mt-10 ml-5 mb-5 border-b-2 border-black-500 w-fit">
        Trending Now
      </h2>

      <div className="overflow-y-auto mx-auto scrollable-content">
        <div className="flex flex-row content gap-x-4">
          {/* suspense works on server components only,
              For <Suspense fallback="…"> to activate, it must receive an 
              unresolved Promise from inside the component tree.
           */}
          <Suspense
            fallback={<img className="w-fit mx-auto" src={loadingGif.src} />}
          >
            <StreamContentPromise />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
