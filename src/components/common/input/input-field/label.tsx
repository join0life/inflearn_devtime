import { ComponentProps, ReactNode } from "react";
import { useInputFieldContext } from "./input-field-context";

interface LabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

const Label = ({ children, ...props }: LabelProps) => {
  const inputFieldContext = useInputFieldContext();

  return (
    <label htmlFor={inputFieldContext.id} {...props}>
      {children}
    </label>
  );
};

export default Label;
