import NavMenu from "../nav-menu/NavMenu";
import ContactButton from "../../ui/custom/ContactButton";

const DesktopNavMenu = () => {
  return (
    <>
      <ul className="flex">
        <NavMenu></NavMenu>
      </ul>
      <ContactButton></ContactButton>
    </>
  );
};

export default DesktopNavMenu;
