import { IStreamingContent } from "./IStreamingContentProps.interface";
import { IStreamingFormErrors } from "./IStreamingFormErrorsPropr.interface";

export interface IFormStateProps {
  success: boolean;
  errors?: IStreamingFormErrors[] | null;
  enteredValues?: IStreamingContent | null;
  errMessage?: string | null;
}
