import { Button } from "../button";
import ContactDialog from "./ContactDialog";

const ContactButton = ({ className }: { className?: string }) => {
  return (
    <ContactDialog>
      <Button className={className}>Contact Me</Button>
    </ContactDialog>
  );
};

export default ContactButton;
