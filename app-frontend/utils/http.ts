import { IStreamingContent } from "@/types/IStreamingContent.interface";

export async function fetchStreamingContent() {
    const response = await fetch('http://localhost:8080/api/streaming');  
    const jsonRes = await response.json();
    
    if (!response.ok) {
        throw new Error("Failed to fetch streaming content");
    }

    return jsonRes;
}

export async function validateUser(formData: any) {
        const response = await fetch("http://localhost:8080/api/users/validate", {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (!response.ok) {
        throw new Error("Failed to fetch streaming content");
    }

    const { userAccess } = await response.json();

    return userAccess;
}

export async function loadStreamingContent() {
  const resp = await fetch("http://localhost:8080/api/streaming");
  const streamData = await resp.json();
  return streamData;
}

export async function createStreamContent(formDataObject: IStreamingContent) {
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

export async function updateStreamContent(formDataObject: IStreamingContent) {
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