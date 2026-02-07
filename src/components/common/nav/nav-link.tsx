import Link from "next/link";
import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
}

export const NavLink = ({ isActive, className, ...rest }: NavLinkProps) => {
  return (
    <Link className={`${className} ${isActive && "font-body-b underline"}`} {...rest} />
  );
};
