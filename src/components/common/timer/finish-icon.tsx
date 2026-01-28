import Image from "next/image";
import finish from "@/assets/finish.svg";
import finishDisabled from "@/assets/finish-disabled.svg";

interface FinishIconProps {
  disabled?: boolean;
}

const FinishIcon = ({ disabled = false }: FinishIconProps) => {
  return (
    <Image
      src={disabled ? finishDisabled : finish}
      width={100}
      height={100}
      alt="종료 아이콘"
    />
  );
};

export default FinishIcon;
