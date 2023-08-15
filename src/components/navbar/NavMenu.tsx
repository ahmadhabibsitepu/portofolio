"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./SideNav";

import ContactButton from "../ui/custom/ContactButton";

import menuIcon from "../../../public/menuIcon.svg";
import { Separator } from "../ui/separator";

const NavMenu = () => {
  const pathname: string = usePathname();
  const isAbout: string =
    pathname === "/about" ? "font-bold underline decoration-2" : "";

  return (
    <div className="flex h-full w-full items-center justify-end">
      <ul className="hidden gap-3 sm:flex">
        <li>
          <Button variant={"link"} asChild className={isAbout}>
            <Link href={"/about"}>About Me</Link>
          </Button>
        </li>
        <li>
          <ContactButton></ContactButton>
        </li>
      </ul>
      <div className="flex sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Image src={menuIcon} alt="menu"></Image>
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <Separator className="mb-2 mt-6" />
            <SheetClose asChild>
              <Link href={"/"} className="flex items-center gap-2">
                <Button variant="link">Home</Button>
              </Link>
            </SheetClose>
            <Separator className="my-2" />
            <SheetClose asChild>
              <Link href={"/about"} className="flex items-center gap-2">
                <Button variant="link">About Me</Button>
              </Link>
            </SheetClose>
            <Separator className="my-2" />
            <ContactButton></ContactButton>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavMenu;
