"use client";
import { editStreamFormAction } from "@/actions/streamingFormAction";
import GenericForm from "@/components/genericForm";
import { IStreamingContentProps } from "@/types/IStreamingContentProps.interface";
import { getStreamById } from "@/utils/http";
import { useParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

export default function EditStreaming() {
  const params = useParams();
  const streamId = params?.id;

  const [selectedStream, setSelectedStream] =
    useState<IStreamingContentProps>();

  useEffect(() => {
    (async () => {
      const streamJson = await getStreamById(streamId);
      setSelectedStream(streamJson);
    })();
  }, [streamId]);

  const [formState, formAction, isPending] = useActionState(
    editStreamFormAction,
    {
      success: false,
      errors: null,
      errMessage: null,
      enteredValues: null,
    }
  );

  formState.enteredValues = selectedStream as IStreamingContentProps;

  return (
    <div className="rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-4xl font-bold text-heading text-center mb-6">
        Edit streaming content
      </h2>

      <div className="text-center mb-5">
        {formState?.success === true && <p>Stream updated</p>}

        {formState?.success === false && formState.errMessage && (
          <p>{formState.errMessage}</p>
        )}
      </div>

      {/* don't render until stream id selected */}
      {selectedStream && (
        <GenericForm
          isEditForm={true}
          formAction={formAction}
          formState={formState}
          isPending={isPending}
        />
      )}
    </div>
  );
}
