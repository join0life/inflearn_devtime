import { ComponentProps } from "react";
import { useInputFieldContext } from "./input-field-context";

type InputProps = ComponentProps<"input">;

const Input = ({ ...props }: InputProps) => {
  const inputFieldContext = useInputFieldContext();

  return <input id={inputFieldContext.id} {...props} />;
};

export default Input;
