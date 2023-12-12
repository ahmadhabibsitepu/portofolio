import NavMenu from "../nav-menu/NavMenu";
import ContactButton from "../../ui/custom/ContactButton";

const SideNavMenu = ({
  closeSideNavHandler,
}: {
  closeSideNavHandler: Function;
}) => {
  return (
    <div className="flex w-full flex-col gap-2 px-4">
      <ul className="flex w-fit flex-col gap-1" onClick={closeSideNavHandler()}>
        <NavMenu></NavMenu>
      </ul>
      <ContactButton></ContactButton>
    </div>
  );
};

export default SideNavMenu;
