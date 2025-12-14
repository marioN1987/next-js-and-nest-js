"use client";

import { deleteStreamById } from "@/utils/http";
import { useWatchHistory } from "@/hooks/useWatchHistory";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  streamId: string;
}

export default function DeleteButton({ streamId }: DeleteButtonProps) {
  const { removeItem } = useWatchHistory();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteStreamById(streamId);
      removeItem(streamId);
      router.push("/"); // or router.refresh() if staying on same page
    } catch (err) {
      console.error("Failed to delete stream:", err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}
