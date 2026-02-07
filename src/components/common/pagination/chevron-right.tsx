import { ChevronRightIcon } from "lucide-react";

interface ChevronRightProps {
  disabled?: boolean;
}

const ChevronRight = ({ disabled }: ChevronRightProps) => {
  const disabledStyle = "bg-gray-200 text-gray-300";
  const enabledStyle = "bg-primary-500-10 text-primary-500";

  return (
    <button
      className={`flex-row-center ${disabled ? disabledStyle : enabledStyle} h-6 w-6 cursor-pointer rounded-[5px] p-0.5`}
    >
      <ChevronRightIcon
        className={`${disabled ? "text-gray-300" : "text-primary-500"} w-ful h-full`}
      />
    </button>
  );
};

export default ChevronRight;
