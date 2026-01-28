import Image from "next/image";
import pause from "@/assets/pause.svg";
import pauseDisabled from "@/assets/pause-disabled.svg";

interface PauseIconProps {
  disabled?: boolean;
}

const PauseIcon = ({ disabled = false }: PauseIconProps) => {
  return (
    <Image
      src={disabled ? pauseDisabled : pause}
      width={100}
      height={100}
      alt="일시정지 아이콘"
    />
  );
};

export default PauseIcon;
