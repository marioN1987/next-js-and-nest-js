import { Suspense } from "react";
import loadingGif from "@/public/loading.gif";
import StreamsItems from "./streamsItems";
import Image from "next/image";

export default function StreamsItemsSuspense() {
  return (
    <Suspense
      fallback={
        <Image
          src={loadingGif}
          priority
          alt="loading"
          className="mx-auto w-fit"
          width={20}
          height={20}
        />
      }
    >
      <StreamsItems />
    </Suspense>
  );
}
