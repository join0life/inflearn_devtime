import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="font-body-m px-4 py-3 text-gray-800 placeholder:text-gray-300 focus:outline-none"
      {...props}
    />
  );
};

export default Input;
