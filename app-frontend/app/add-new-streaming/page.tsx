"use client";
import { useActionState, useContext, useEffect } from "react";
import { createStreamFormAction } from "../../actions/streamingFormAction";
import { AppContext } from "@/components/context/app-content-provider";
import { useRouter } from "next/navigation";
import GenericForm from "@/components/genericForm";

export default function AddNewStreaming() {
  const { isAdmin } = useContext(AppContext);
  const router = useRouter();

  const [formState, formAction, isPending] = useActionState(
    createStreamFormAction,
    {
      errors: null,
      errMessage: null,
      success: false,
    }
  );

  //redirect if not admin
  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, [isAdmin]);

  return (
    <div className="w-1/2 mx-auto my-5">
      <div className="w-full mx-auto my-4">
        <h2 className="text-4xl font-bold text-heading text-center mb-6">
          Add new streaming content
        </h2>

        {formState?.success === true && <p>Stream created</p>}

        {formState?.success === false && formState.errMessage && (
          <p>{formState.errMessage}</p>
        )}

        <GenericForm
          formAction={formAction}
          formState={formState}
          isPending={isPending}
        />
      </div>
    </div>
  );
}
