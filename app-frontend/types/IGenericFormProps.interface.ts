import { IFormStateProps } from "./IFormStateProps.interface";

export interface GenericFormProps {
  formAction: (formData: FormData) => void | Promise<void>;
  formState: IFormStateProps | null;
  isPending?: boolean;
  isEditForm?: boolean;
};