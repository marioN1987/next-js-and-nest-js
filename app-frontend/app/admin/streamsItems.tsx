import DeleteButton from "@/components/delete-stream/deleteButton";
import { useWatchHistory } from "@/hooks/useWatchHistory";
import { IStreamingContentProps } from "@/types/IStreamingContentProps.interface";
import { deleteStreamById, loadStreamingContent } from "@/utils/http";
import Link from "next/link";

export default async function StreamsItems() {
  const streamsList: IStreamingContentProps[] = await loadStreamingContent();

  return (
    <table className="w-full table-auto md:table-fixed border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
            Title
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
            Description
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
            Actions
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {streamsList &&
          streamsList.map((stream) => (
            <tr key={stream.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 text-sm text-gray-800">
                {stream.title}
              </td>

              <td className="px-4 py-2 text-sm text-gray-600">
                {stream.description}
              </td>

              <td className="px-4 py-2 text-sm space-x-2">
                <Link
                  href={{ pathname: `/admin/edit-streaming/${stream.id}` }}
                  className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Edit
                </Link>
                <DeleteButton streamId={stream.id} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
