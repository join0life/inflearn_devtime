import { LucideIcon } from "lucide-react";

interface PaginationIconButtonProps {
  icon: LucideIcon;
  disabled?: boolean;
  onClick: () => void;
}

const PaginationIconButton = ({
  icon: Icon,
  disabled,
  onClick,
}: PaginationIconButtonProps) => {
  const disabledStyle = "bg-gray-200 text-gray-300 cursor-not-allowed";
  const enabledStyle = "bg-primary-500-10 text-primary-500 cursor-pointer";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex-row-center ${disabled ? disabledStyle : enabledStyle} h-6 w-6 rounded-[5px] p-0.5`}
    >
      <Icon className="w-ful h-full" />
    </button>
  );
};

export default PaginationIconButton;
