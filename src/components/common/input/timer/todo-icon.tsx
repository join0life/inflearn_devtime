import Image from "next/image";
import todo from "@/assets/todo.svg";
import todoDisabled from "@/assets/todo-disabled.svg";

interface TodoIconProps {
  disabled?: boolean;
}

const TodoIcon = ({ disabled = false }: TodoIconProps) => {
  return (
    <Image
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      src={disabled ? todoDisabled : todo}
      width={36}
      height={24}
      alt="할 일 목록 아이콘"
    />
  );
};

export default TodoIcon;
