interface HintTextProps {
  children: React.ReactNode;
}

const HintText = ({ children }: HintTextProps) => {
  return <p>{children}</p>;
};

export default HintText;
