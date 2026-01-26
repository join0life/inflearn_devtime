interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

const baseStyle =
  "cursor-pointer px-4 py-3 flex-row-center gap-8 rounded-[5px] transition-colors";

const buttonVariants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
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
