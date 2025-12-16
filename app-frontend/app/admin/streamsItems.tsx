import DeleteButton from "@/components/delete-stream/deleteButton";
import { useWatchHistory } from "@/hooks/useWatchHistory";
import { IStreamingContentProps } from "@/types/IStreamingContentProps.interface";
import { deleteStreamById, loadStreamingContent } from "@/utils/http";
import Link from "next/link";

export default async function StreamsItems() {
  const streamsList: IStreamingContentProps[] = await loadStreamingContent();

  return (
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
      {/* Header: hidden on mobile */}
      <thead className="bg-gray-100 hidden md:table-header-group">
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
        {streamsList?.map((stream) => (
          <tr
            key={stream.id}
            className="
          block md:table-row
          hover:bg-gray-50
          transition-colors
          p-4 md:p-0
          space-y-3 md:space-y-0
        "
          >
            {/* Title */}
            <td
              data-label="Title"
              className="
            block md:table-cell
            px-0 md:px-4
            py-1 md:py-2
            text-sm text-gray-800
            before:content-[attr(data-label)]
            before:block
            before:text-xs
            before:font-semibold
            before:text-gray-500
            md:before:hidden
          "
            >
              {stream.title}
            </td>

            {/* Description */}
            <td
              data-label="Description"
              className="
            block md:table-cell
            px-0 md:px-4
            py-1 md:py-2
            text-sm text-gray-600
            before:content-[attr(data-label)]
            before:block
            before:text-xs
            before:font-semibold
            before:text-gray-500
            md:before:hidden
          "
            >
              {stream.description}
            </td>

            {/* Actions */}
            <td
              data-label="Actions"
              className="
            block md:table-cell
            px-0 md:px-4
            py-2
            text-sm
            before:content-[attr(data-label)]
            before:block
            before:text-xs
            before:font-semibold
            before:text-gray-500
            md:before:hidden
          "
            >
              <div className="flex gap-2">
                <Link
                  href={`/admin/edit-streaming/${stream.id}`}
                  className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Edit
                </Link>
                <DeleteButton streamId={stream.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
