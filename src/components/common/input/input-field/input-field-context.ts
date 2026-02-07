import { createContext, useContext } from "react";

type InputFieldContextValue = {
  id: string;
};

export const InputFieldContext = createContext<InputFieldContextValue | null>(
  null,
);

export const useInputFieldContext = () => {
  const context = useContext(InputFieldContext);

  if (!context)
    throw new Error(
      "useInputFieldContext는 InputField 컴포넌트 내에서만 사용할 수 있습니다.",
    );

  return context;
};
