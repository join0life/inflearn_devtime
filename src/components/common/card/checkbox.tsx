"use client";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
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
  className,
}: CheckboxProps) => {
  const handleCheckboxChange = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <label className={`${disabled ? "cursor-not-allowed" : "cursor-pointer"} `}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={disabled}
        hidden
      />

      <div
        className={clsx(
          twMerge(
            "flex-row-center rounded-[5px] border transition-all",
            sizeMap[size],
            checked && !disabled
              ? "bg-primary-500-10 border-primary-500"
              : "border-primary-500 bg-white",
            disabled && "border-white bg-white/50",
            className,
          ),
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
