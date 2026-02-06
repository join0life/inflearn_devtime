interface HintTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const HintText = ({ children, ...props }: HintTextProps) => {
  return <p {...props}>{children}</p>;
};

export default HintText;
