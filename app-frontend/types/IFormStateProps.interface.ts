import { IStreamingContentProps } from "./IStreamingContentProps.interface";
import { IStreamingFormErrors } from "./IStreamingFormErrorsPropr.interface";

export interface IFormStateProps {
  success: boolean;
  errors?: IStreamingFormErrors[] | null;
  enteredValues?: IStreamingContentProps | null;
  errMessage?: string | null;
}
