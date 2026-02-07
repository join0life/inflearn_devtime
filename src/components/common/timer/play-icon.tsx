import Image from "next/image";
import start from "@/assets/start.svg";
import startDisabled from "@/assets/start-disabled.svg";

interface PlayIconProps {
  disabled?: boolean;
}

const PlayIcon = ({ disabled = false }: PlayIconProps) => {
  return (
    <Image
      src={disabled ? startDisabled : start}
      width={80}
      height={100}
      alt="재생 아이콘"
    />
  );
};

export default PlayIcon;
