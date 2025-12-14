import { ProgressBarProps } from "@/types/IProgressBarProps.interface";

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full absolute bottom-0 h-[10px] bg-gray-200 h-3 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      {/* Percentage text */}
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
        {progress.toFixed(2)}%
      </span>
    </div>
  );
}
