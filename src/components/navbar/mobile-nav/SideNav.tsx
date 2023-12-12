"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLogo from "../NavLogo";
import SideNavMenu from "./SideNavMenu";
import { preventDefaultHandler } from "@/lib/utils";

const SideNav = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSideNavHandler = () => {
    return () => {
      setIsOpen(false);
    };
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className="flex w-80 flex-col gap-2 border-none p-0 sm:max-w-full"
        onOpenAutoFocus={preventDefaultHandler()}
        onCloseAutoFocus={preventDefaultHandler()}
      >
        <SheetHeader className="h-14 flex-row items-center border-b p-0 px-4">
          <div className="h-fit w-fit" onClick={closeSideNavHandler()}>
            <NavLogo></NavLogo>
          </div>
        </SheetHeader>
        <SideNavMenu closeSideNavHandler={closeSideNavHandler}></SideNavMenu>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
