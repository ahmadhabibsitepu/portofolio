import NavLogo from "./NavLogo";
import MobileNavMenu from "./mobile-nav/MobileNavMenu";
import DesktopNavMenu from "./desktop-nav/DesktopNavMenu";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-center border-b bg-background">
      <div className="flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <NavLogo></NavLogo>
        <div className="flex h-full w-fit items-center sm:hidden">
          <MobileNavMenu></MobileNavMenu>
        </div>
        <div className="hidden h-full w-fit items-center gap-4 sm:flex">
          <DesktopNavMenu></DesktopNavMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
