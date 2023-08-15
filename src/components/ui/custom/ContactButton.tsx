"use client";
import { Contact, contacts } from "@/lib/staticData";
import { Button } from "../button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactButton = ({ className }: { className?: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}>Contact Me</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>
            Feel Free To Contact Me For More Information
          </DialogTitle>
          <DialogDescription></DialogDescription>
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

export default ContactButton;
