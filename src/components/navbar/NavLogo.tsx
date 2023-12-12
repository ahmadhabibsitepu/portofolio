import Image from "next/image";
import Link from "next/link";

import { logo } from "@/lib/staticData";

const NavLogo = () => {
  return (
    <div className="flex h-full w-full items-center justify-start">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={logo} alt="logo"></Image>
        <span className="text-lg font-bold tracking-tight">
          AHMAD HABIBULLAH
        </span>
      </Link>
    </div>
  );
};

export default NavLogo;
