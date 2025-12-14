import StreamsItemsSuspense from "./streamsItemsSuspense";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="mx-auto my-4 w-1/2">
      <h2 className="text-4xl font-bold text-heading text-center mb-6 text-center">
        Admin page
      </h2>
      <div className="my-5">
        <Link
          className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
          href={{ pathname: "/admin/add-new-streaming" }}
        >
          Add new Streamimg
        </Link>
      </div>
      <StreamsItemsSuspense />
    </div>
  );
}
