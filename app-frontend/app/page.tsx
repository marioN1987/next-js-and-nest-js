import TrendingNow from "@/app/trending-now/trendingNow";
import MostWatched from "./most-watched/page";

export default function Home() {
  return (
    <main>
      <MostWatched />
      <TrendingNow />
    </main>
  );
}
