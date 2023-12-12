import FooterContacts from "./FooterContacts";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center border-t text-center">
      <div className="flex w-full max-w-7xl flex-col items-center gap-4 px-2 py-6">
        <h3 className="w-72 text-xl font-semibold tracking-tight sm:w-full">
          Feel Free To Contact Me For More Information
        </h3>
        <FooterContacts></FooterContacts>
      </div>
    </footer>
  );
};

export default Footer;
