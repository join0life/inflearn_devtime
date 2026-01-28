interface ToolTipProps {
  label: string;
}

const ToolTip = ({ label }: ToolTipProps) => {
  return (
    <div className="font-body-small-r absolute top-full left-1/2 rounded-[3px] bg-gray-800 px-2 py-1 whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
      {label}
    </div>
  );
};

export default ToolTip;
