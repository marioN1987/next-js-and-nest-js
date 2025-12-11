import { IStreamingContent } from "./IStreamingContent.interface";
import { IStreamingFormErrors } from "./IStreamingFormErrors.interface";

export interface IFormStateProps {
  success: boolean;
  errors?: IStreamingFormErrors[] | null;
  enteredValues?: IStreamingContent | null;
  errMessage?: string | null;
}
