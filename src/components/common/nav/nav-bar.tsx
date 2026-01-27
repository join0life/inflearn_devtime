import Image from "next/image";
import logo from "@/assets/logo-horizontal.svg";

import { NavLink } from "./nav-link";
import NavSign from "./nav-sign";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-secondary-indigo-500 font-body-s flex cursor-pointer items-center gap-9 py-2.5">
        <Image
          src={logo}
          alt="devtime 로고 - horizontal"
          width={148}
          height={40}
        />
        <NavLink href={"/dashboard"}>대시보드</NavLink>
        <NavLink href={"/ranking"}>랭킹</NavLink>
      </div>
      <NavSign />
    </div>
  );
}
