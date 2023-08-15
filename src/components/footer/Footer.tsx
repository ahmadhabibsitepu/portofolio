import { Contact, contacts } from "@/lib/staticData";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center border-t text-center">
      <div className="flex w-full max-w-7xl flex-col items-center gap-4 px-2 py-6">
        <h5 className="text-lg font-semibold tracking-tight">
          Feel Free To Contact Me For More Information
        </h5>
        <ul className="ml-6 flex flex-col gap-1 text-sm leading-none md:flex-row md:gap-8">
          {contacts.map((contact: Contact, index) => (
            <li key={index}>
              {`${contact.label} : `}
              <a href={contact.action} className="font-semibold">
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
