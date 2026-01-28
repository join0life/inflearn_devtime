import Image from "next/image";
import reset from "@/assets/reset.svg";
import resetDisabled from "@/assets/reset-disabled.svg";

interface ResetIconProps {
  disabled?: boolean;
}

const ResetIcon = ({ disabled = false }: ResetIconProps) => {
  return (
    <Image
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      src={disabled ? resetDisabled : reset}
      width={36}
      height={36}
      alt="리셋 아이콘"
    />
  );
};

export default ResetIcon;
