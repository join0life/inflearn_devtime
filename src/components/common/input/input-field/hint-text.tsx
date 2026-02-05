interface HintTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const HintText = ({ children, ...props }: HintTextProps) => {
  return <p>{children}</p>;
};

export default HintText;
