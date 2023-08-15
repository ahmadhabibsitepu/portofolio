import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const navbar = () => {
  return (
    <nav className="flex w-full justify-center border-b">
      <div className="flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <NavLogo></NavLogo>
        <NavMenu></NavMenu>
      </div>
    </nav>
  );
};

export default navbar;
