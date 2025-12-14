import { fetchStreamingContent } from "@/utils/http";
import { StreamItems } from "@/app/trending-now/streamItems";

export default async function StreamContentPromise() {
  //For <Suspense fallback="…"> to activate, it must receive an unresolved Promise from inside the component tree.
  const items = await fetchStreamingContent();

  return <StreamItems items={items} />;
}
