"use client";
import { useActionState } from "react";
import { createStreamFormAction } from "../../../actions/streamingFormAction";
import GenericForm from "@/components/genericForm";

export default function AddNewStreaming() {
  const [formState, formAction, isPending] = useActionState(
    createStreamFormAction,
    {
      errors: null,
      errMessage: null,
      success: false,
    }
  );

  return (
    <div className="mx-auto my-5">
      <div className="mx-auto my-4">
        <h2 className="text-4xl font-bold text-heading text-center mb-6">
          Add new streaming content
        </h2>

        <div className="text-center mb-5">
          {formState?.success === true && <p>Stream created</p>}

          {formState?.success === false && formState.errMessage && (
            <p>{formState.errMessage}</p>
          )}
        </div>

        <GenericForm
          formAction={formAction}
          formState={formState}
          isPending={isPending}
        />
      </div>
    </div>
  );
}
