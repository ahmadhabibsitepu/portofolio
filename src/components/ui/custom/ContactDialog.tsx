"use client";
import { Contact, contacts } from "@/lib/staticData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { preventDefaultHandler } from "@/lib/utils";

const ContactDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onOpenAutoFocus={preventDefaultHandler()}>
        <DialogHeader className="text-left">
          <DialogTitle>My Contact</DialogTitle>
          <DialogDescription>
            Feel free to contact me for more information
          </DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col gap-2 text-sm leading-none">
          {contacts.map((contact: Contact, index) => (
            <li key={index}>
              {`${contact.label} : `}
              <a href={contact.action} className="font-semibold">
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
