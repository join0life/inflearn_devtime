import { X } from "lucide-react";

interface ChipProps {
  children: React.ReactNode;
  deletable: boolean;
}

const Chip = ({ children, deletable }: ChipProps) => {
  return (
    <div className="bg-primary-500-10 border-primary-500 inline-flex items-center justify-center gap-2 rounded-[5px] border p-3">
      <div className="text-primary-500 font-body-small-s">{children}</div>
      {deletable && (
        <button>
          <X size={20} className="text-primary-500 cursor-pointer" />
        </button>
      )}
    </div>
  );
};
export default Chip;
