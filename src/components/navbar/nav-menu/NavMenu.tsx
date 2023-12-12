"use client";
import { usePathname } from "next/navigation";

import NavLink from "./NavLink";

const NavMenu = () => {
  const pathname: string = usePathname();

  return (
    <>
      <li>
        <NavLink route="/" text="Home" pathname={pathname}></NavLink>
      </li>
      <li>
        <NavLink route="/about" text="About Me" pathname={pathname}></NavLink>
      </li>
    </>
  );
};

export default NavMenu;
