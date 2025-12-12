"use server";
import { isValidUrl } from "@/helper/helperMethods";
import { IStreamingContent } from "@/types/IStreamingContent.interface";
import { IStreamingFormErrors } from "@/types/IStreamingFormErrors.interface";
import { IFormStateProps } from "@/types/IFormStateProps.interface";
import { createStreamContent, updateStreamContent } from "@/utils/http";

/* -------------------------------------------------
   VALIDATION
------------------------------------------------- */
function validationForm(formData: FormData): {
    errors: IStreamingFormErrors[];
    formDataObject: IStreamingContent;
} {
    const id = (formData.get("id") as string) ?? crypto.randomUUID();

    const title = (formData.get("title") as string) ?? "";
    const duration = (formData.get("duration") as string) ?? "";
    const watch_progress = (formData.get("watch_progress") as string) ?? "";
    const thumbnail_url = (formData.get("thumbnail_url") as string) ?? "";
    const video_url = (formData.get("video_url") as string) ?? "";
    const description = (formData.get("description") as string) ?? "";
    const year = (formData.get("year") as string) ?? "";
    const rating = (formData.get("rating") as string) ?? "";
    const cast = (formData.get("cast") as string) ?? "";
    const genre = (formData.get("genre") as string) ?? "";

    let errors: IStreamingFormErrors[] = [];

    /* --- VALIDATIONS --- */

    if (!title) errors.push({ colName: "title", message: "Please enter title" });

    if (!duration) {
        errors.push({ colName: "duration", message: "Please enter duration" });
    } else if (isNaN(Number(duration))) {
        errors.push({ colName: "duration", message: "Invalid duration" });
    }

    if (!watch_progress) {
        errors.push({ colName: "watch_progress", message: "Please enter watch progress" });
    } else if (isNaN(Number(watch_progress))) {
        errors.push({ colName: "watch_progress", message: "Invalid watch progress" });
    }

    if (!thumbnail_url) {
        errors.push({ colName: "thumbnail_url", message: "Please enter thumbnail_url" });
    } else if (!isValidUrl(thumbnail_url)) {
        errors.push({ colName: "thumbnail_url", message: "Invalid URL" });
    }

    if (!video_url) {
        errors.push({ colName: "video_url", message: "Please enter video_url" });
    } else if (!isValidUrl(video_url)) {
        errors.push({ colName: "video_url", message: "Invalid URL" });
    }

    if (!description) errors.push({ colName: "description", message: "Please enter description" });

    if (!year) {
        errors.push({ colName: "year", message: "Please enter year" });
    } else if (isNaN(Number(year))) {
        errors.push({ colName: "year", message: "Invalid year" });
    }

    if (!rating) {
        errors.push({ colName: "rating", message: "Please enter rating" });
    } else if (isNaN(Number(rating))) {
        errors.push({ colName: "rating", message: "Invalid rating" });
    }

    if (!cast) errors.push({ colName: "cast", message: "Please enter cast" });
    if (!genre) errors.push({ colName: "genre", message: "Please enter genre" });


    /* ---- FINAL CLEAN OBJECT ---- */
    const formDataObject: IStreamingContent = {
        id,
        title,
        duration: Number(duration),
        genre,
        rating: Number(rating),
        watch_progress: Number(watch_progress),
        video_url,
        thumbnail_url,
        year: Number(year),
        cast,
        description,
    };

    return { errors, formDataObject };
}

/* -------------------------------------------------
   EDIT ACTION
------------------------------------------------- */
export async function editStreamFormAction(
    prevState: IFormStateProps,
    formData: FormData
): Promise<IFormStateProps> {
    const { errors, formDataObject } = validationForm(formData);

    if (errors.length > 0) {
        return {
            success: false,
            errors,
            errMessage: null,
            enteredValues: formDataObject,
        };
    }

    try {
        return await updateStreamContent(formDataObject);
    } catch (err) {
        return {
            success: false,
            errors: null,
            errMessage: err instanceof Error ? err.message : "Unknown error",
            enteredValues: formDataObject,
        };
    }
}

/* -------------------------------------------------
   CREATE ACTION
------------------------------------------------- */
export async function createStreamFormAction(
    prevState: IFormStateProps,
    formData: FormData
): Promise<IFormStateProps> {
    const { errors, formDataObject } = validationForm(formData);

    if (errors.length > 0) {
        return {
            success: false,
            errors,
            errMessage: null,
            enteredValues: formDataObject,
        };
    }

    try {
        return await createStreamContent(formDataObject);
    } catch {
        return {
            success: false,
            errors: null,
            errMessage: "Network error",
            enteredValues: formDataObject,
        };
    }
}