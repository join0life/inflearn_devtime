type State = "informative" | "success" | "error";

interface HelperTextProps {
  state: State;
  text: string;
}

const helperTextState = {
  informative: "text-secondary-informative-500",
  error: "text-secondary-negative-500",
  success: "text-secondary-positive-500",
};

const HelperText = ({ state, text }: HelperTextProps) => {
  return <p className={`${helperTextState[state]} font-caption-m`}>{text}</p>;
};
export default HelperText;
