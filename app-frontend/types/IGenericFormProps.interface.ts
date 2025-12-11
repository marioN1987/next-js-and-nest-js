import { IFormStateProps } from "./IFormStateProps.interface";
import { IStreamingContent } from "./IStreamingContent.interface";

export interface GenericFormProps {
  formAction: (formData: FormData) => void | Promise<void>;
  formState: IFormStateProps | null;
  isPending?: boolean;
  isEditForm?: boolean;
};