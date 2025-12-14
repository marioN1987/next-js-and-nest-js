import { IStreamingContentProps } from "./IStreamingContentProps.interface";

export interface IStreamItemModalProps {
  selected: IStreamingContentProps | null;
  onCloseClick: () => void;
}