import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";

const NavLink = ({
  route,
  text,
  pathname,
}: {
  route: string;
  text: string;
  pathname: string;
}) => {
  const isCurrent: string = pathname === route ? "font-bold" : "";

  return (
    <Link
      href={route}
      className={cn(buttonVariants({ variant: "link" }), isCurrent)}
    >
      {text}
    </Link>
  );
};

export default NavLink;
