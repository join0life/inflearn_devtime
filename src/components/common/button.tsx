interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

const baseStyle =
  "inline-flex px-3 py-4 justify-center items-center gap-8 rounded-sm transition-colors";

const buttonVariants = {
  primary: "bg-primary-500 text-white",
  secondary: "bg-primary-500-10 text-primary-500",
  tertiary: "bg-gray-l50 text-primary-500",
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const combinedClassName = `${baseStyle} ${buttonVariants[variant]} ${className || ""}`;

  return (
    <button className={combinedClassName} {...props}>
      {props.children}
    </button>
  );
}
