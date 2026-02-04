import Image, { StaticImageData } from "next/image";

interface DeleteButtonProps {
  icon: StaticImageData;
  onClick: () => void;
  label: string;
  size?: number;
}

const DeleteButton = ({
  icon,
  onClick,
  label,
  size = 24,
}: DeleteButtonProps) => {
  return (
    <button onClick={onClick} aria-label={label}>
      <Image src={icon} alt={label} width={size} height={size} />
    </button>
  );
};
export default DeleteButton;
