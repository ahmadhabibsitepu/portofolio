import { Contact, contacts } from "@/lib/staticData";

const FooterContacts = () => {
  return (
    <ul className="flex flex-col flex-wrap justify-center gap-1 whitespace-nowrap text-sm leading-none md:flex-row md:gap-8">
      {contacts.map((contact: Contact, index) => (
        <li key={index}>
          {`${contact.label} : `}
          <a href={contact.action} className="font-semibold">
            {contact.value}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterContacts;
