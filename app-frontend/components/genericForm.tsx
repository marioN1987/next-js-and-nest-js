import { extractErrMessage } from "@/helper/helperMethods";
import { GenericFormProps } from "@/types/IGenericFormProps.interface";
import { useEffect, useRef } from "react";

export default function GenericForm({
  formAction,
  formState,
  isPending,
  isEditForm = false,
}: GenericFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState?.success) {
      formRef.current?.reset();
    }
  }, [formState?.success]);

  if (formState?.success) {
    formState.enteredValues = null;
  }

  return (
    <form
      className="w-full inset-shadow-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      action={formAction}
      ref={formRef}
    >
      {isEditForm && (
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="id"
          >
            ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            aria-label="Stream ID"
            readOnly={true}
            type="text"
            name="id"
            defaultValue={formState?.enteredValues?.id}
          />
        </div>
      )}

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          aria-label="Please enter title"
          placeholder="Please enter title ..."
          name="title"
          defaultValue={formState?.enteredValues?.title}
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors && extractErrMessage(formState.errors, "title")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="duration"
        >
          Duration
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="duration"
          aria-label="Please enter duration"
          type="number"
          placeholder="Please enter duration (in seconds) ..."
          name="duration"
          min="0"
          step="1"
          defaultValue={
            formState?.enteredValues?.duration === 0
              ? ""
              : formState?.enteredValues?.duration
          }
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors && extractErrMessage(formState.errors, "duration")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="watch_progress"
        >
          Watch Progress
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="watch_progress"
          type="number"
          aria-label="Please enter watch progress"
          min="0"
          step="1"
          placeholder="Please enter watch progress (in seconds) ..."
          name="watch_progress"
          defaultValue={
            formState?.enteredValues?.watch_progress === 0
              ? ""
              : formState?.enteredValues?.watch_progress
          }
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors &&
            extractErrMessage(formState.errors, "watch_progress")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          aria-label="Please enter description"
          placeholder="Please enter description ..."
          name="description"
          defaultValue={formState?.enteredValues?.description}
        ></textarea>
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors &&
            extractErrMessage(formState?.errors, "description")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="thumbnail_url"
        >
          Thumbnail Url
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="thumbnail_url"
          aria-label="Please enter thumbnail url"
          type="url"
          name="thumbnail_url"
          placeholder="Please enter thumbnail url ..."
          defaultValue={formState?.enteredValues?.thumbnail_url?.toString()}
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors &&
            extractErrMessage(formState.errors, "thumbnail_url")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="video_url"
        >
          Video Url
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="video_url"
          aria-label="Please enter video url"
          type="url"
          name="video_url"
          placeholder="Please enter video url ..."
          defaultValue={formState?.enteredValues?.video_url?.toString()}
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors &&
            extractErrMessage(formState.errors, "video_url")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="year"
        >
          Year
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="year"
          type="number"
          aria-label="Please enter year"
          min={1920}
          max={2025}
          name="year"
          placeholder="Please enter year(1920-2025) ..."
          defaultValue={
            formState?.enteredValues?.year === 0
              ? ""
              : formState?.enteredValues?.year
          }
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors && extractErrMessage(formState.errors, "year")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="genre"
        >
          Genre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="genre"
          aria-label="Please enter genre"
          type="text"
          name="genre"
          placeholder="Please enter genre ..."
          defaultValue={formState?.enteredValues?.genre}
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors && extractErrMessage(formState.errors, "genre")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Rating
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="number"
          aria-label="Please enter rating"
          min={1}
          max={10}
          name="rating"
          step={0.1}
          placeholder="Please enter rating(0-10) ..."
          defaultValue={
            formState?.enteredValues?.rating === 0.0
              ? ""
              : formState?.enteredValues?.rating
          }
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors && extractErrMessage(formState.errors, "rating")}
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cast"
        >
          Cast
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cast"
          aria-label="Please enter cast"
          type="text"
          name="cast"
          placeholder="Please enter cast ..."
          defaultValue={formState?.enteredValues?.cast}
        />
        <p className="mt-1 text-sm text-red-600">
          {formState?.errors && extractErrMessage(formState.errors, "cast")}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button
          aria-label={`${isEditForm ? "Update" : "Create"}`}
          type="submit"
          disabled={isPending}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isPending ? "Processing..." : isEditForm ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
