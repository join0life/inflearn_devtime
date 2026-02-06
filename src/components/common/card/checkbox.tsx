"use client";
import clsx from "clsx";

import { Check } from "lucide-react";

interface CheckboxProps extends Omit<
  React.ComponentProps<"input">,
  "size" | "onChange"
> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md";
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-7 w-7",
};

const Checkbox = ({
  checked,
  onChange,
  disabled,
  size = "md",
  ...props
}: CheckboxProps) => {
  const handleCheckboxChange = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <label className={`${disabled ? "cursor-not-allowed" : "cursor-pointer"} `}>
      <input
        {...props}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={disabled}
        hidden
      />

      <div
        className={clsx(
          "flex-row-center rounded-[5px] border transition-all",
          sizeMap[size],
          {
            "border-white bg-white/50": disabled,
            "bg-primary-500-10 border-primary-500": checked && !disabled,
            "border-primary-500 bg-white": !checked && !disabled,
          },
        )}
      >
        <Check
          className={clsx({
            "text-white": disabled,
            "text-primary-500": checked && !disabled,
            "opacity-0": !checked && !disabled,
          })}
        />
      </div>
    </label>
  );
};

export default Checkbox;
