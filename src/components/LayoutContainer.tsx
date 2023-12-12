import { cn } from "@/lib/utils";

const LayoutContainer = ({
  outerDivClassName = "",
  innerDivClassName = "",
  children,
}: {
  outerDivClassName?: string;
  innerDivClassName?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex w-full justify-center", outerDivClassName)}>
      <div
        className={cn(
          "mt-16 flex w-full max-w-7xl justify-center",
          innerDivClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
