import Image from "next/image";

import SideNav from "./SideNav";
import { menuIcon } from "@/lib/staticData";

const MobileNavMenu = () => {
  return (
    <SideNav>
      <button className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <Image src={menuIcon} alt="menu"></Image>
      </button>
    </SideNav>
  );
};

export default MobileNavMenu;
