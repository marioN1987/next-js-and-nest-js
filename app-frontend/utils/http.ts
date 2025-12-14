import { IStreamingContentProps } from "@/types/IStreamingContentProps.interface";
import { ParamValue } from "next/dist/server/request/params";

export async function fetchStreamingContent() {
    const response = await fetch('http://localhost:8080/api/streaming');  
    const jsonRes = await response.json();
    
    if (!response.ok) {
        throw new Error("Failed to fetch streaming content");
    }

    return jsonRes;
}

export async function validateUser(formData: any) {
  try {
    const response = await fetch("http://localhost:8080/api/users/validate", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json().catch(() => ({})); // fallback if JSON is invalid

    if (!response.ok) {
      // Use message from server or fallback to status text
      const msg = data?.message || response.statusText || "Unknown error";
      throw new Error("Failed to fetch streaming content: " + msg);
    }

    return data.userAccess;
  } catch (err: any) {
    // Catch network errors, etc.
    throw new Error(err?.message || "Unknown error during fetch");
  }
}

export async function loadStreamingContent() {
  const resp = await fetch("http://localhost:8080/api/streaming");
  const streamData = await resp.json();
  return streamData;
}

export async function createStreamContent(formDataObject: IStreamingContentProps) {
    const res = await fetch(`http://localhost:8080/api/streaming/create`, {
            method: "POST",
            body: JSON.stringify(formDataObject),
            headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
        const data = await res.json();
        return {
            success: false,
            errors: null,
            errMessage: data.message || "Failed to save",
            enteredValues: formDataObject,
        };
    }

    return {
        success: true,
        errors: null,
        errMessage: null,
        enteredValues: undefined,
    };
}

export async function updateStreamContent(formDataObject: IStreamingContentProps) {
        const res = await fetch(`http://localhost:8080/api/streaming/${formDataObject.id}`, {
            method: "PUT",
            body: JSON.stringify(formDataObject),
            headers: { "Content-Type": "application/json" },
        });

    if (!res.ok) {
        const data = await res.json();
        return {
            success: false,
            errors: null,
            errMessage: data.message || "Failed to save",
            enteredValues: formDataObject,
        };
    }

    return {
        success: true,
        errors: null,
        errMessage: null,
        enteredValues: undefined,
    };
}

export async function getStreamById(streamId: ParamValue) {
  const resp = await fetch("http://localhost:8080/api/streaming/" + streamId);
  return await resp.json();
}