"use client";
import { editStreamFormAction } from "@/actions/streamingFormAction";
import { AppContext } from "@/components/context/app-content-provider";
import GenericForm from "@/components/genericForm";
import { loadStreamingContent } from "@/helper/helperMethods";
import { IFormStateProps } from "@/types/IFormStateProps.interface";
import { IStreamingContent } from "@/types/IStreamingContent.interface";
import { useRouter } from "next/navigation";
import React, {
  useActionState,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export default function EditStreaming() {
  const { isAdmin } = useContext(AppContext);
  const [streamingData, setStreamingData] = useState<IStreamingContent[]>([]);
  const [selectedStreamId, setSelectedStreamId] = useState("");
  const router = useRouter();

  const fetchAllStreamingContent = useCallback(() => {
    loadStreamingContent().then((data) => setStreamingData(data));
  }, [streamingData]);

  useEffect(() => {
    fetchAllStreamingContent();
  }, []);

  const initialValues: IFormStateProps = {
    success: false,
    errors: null,
    errMessage: null,
    enteredValues: null,
  };

  const [formState, formAction, isPending] = useActionState(
    editStreamFormAction,
    initialValues
  );

  //redirect if not admin
  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, [isAdmin]);

  const handleSelectedStream = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedStreamId = event.target.value;

    if (!selectedStreamId) return;

    const resp = await fetch(
      "http://localhost:8080/api/streaming/" + selectedStreamId
    );

    const json: IStreamingContent = await resp.json();
    setSelectedStreamId(selectedStreamId);
    formState.enteredValues = json as IStreamingContent;
  };

  useEffect(() => {
    if (formState.success) {
      setSelectedStreamId("");
      fetchAllStreamingContent();
    }
  }, [formState.success]);

  return (
    <div className="w-[50%] mx-auto rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-4xl font-bold text-heading text-center mb-6">
        Edit streaming content
      </h2>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="stream"
      >
        Select stream
      </label>
      <select
        name="select-stream"
        className="py-3 px-4 mb-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        onChange={handleSelectedStream}
        value={selectedStreamId}
      >
        <option value="">Select ...</option>
        {streamingData &&
          streamingData.map((streamData) => (
            <option key={streamData.id} value={streamData.id}>
              {streamData.title}
            </option>
          ))}
      </select>

      {formState?.success === true && <p>Stream updated</p>}

      {formState?.success === false && formState.errMessage && (
        <p>{formState.errMessage}</p>
      )}

      {selectedStreamId && (
        <GenericForm
          key={selectedStreamId}
          isEditForm={true}
          formAction={formAction}
          formState={formState}
          isPending={isPending}
        />
      )}
    </div>
  );
}
