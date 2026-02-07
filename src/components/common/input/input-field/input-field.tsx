import { InputFieldContext } from "./input-field-context";
import HintText from "./hint-text";
import Input from "./input";
import Label from "./label";
import Button from "../../button";

interface InputFieldProps {
  id: string;
  children: React.ReactNode;
}

const InputField = ({ id, children }: InputFieldProps) => {
  return (
    <InputFieldContext.Provider value={{ id }}>
      <div className="flex flex-col">{children}</div>
    </InputFieldContext.Provider>
  );
};

InputField.Label = Label;
InputField.Input = Input;
InputField.Button = Button;
InputField.HintText = HintText;

export default InputField;
