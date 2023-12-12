"use client";
import { cn } from "@/lib/utils";
import { CircleIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const SectionPostpone = ({
  isPostpone,
  children,
}: {
  isPostpone: Boolean;
  children: React.ReactNode;
}) => {
  const svgRef = useRef<Array<SVGElement> | null[]>([]);

  useEffect(() => {
    svgRef.current?.map((_, index) => {
      if (index === 0) {
        svgRef.current[index]?.classList.remove("paused");
        svgRef.current[index]?.addEventListener("animationiteration", () => {
          svgRef.current[index + 1]?.classList.remove("paused");
          svgRef.current[index]?.classList.add("paused");
        });
      } else if (index === svgRef.current.length - 1) {
        svgRef.current[index]?.addEventListener("animationiteration", () => {
          svgRef.current[0]?.classList.remove("paused");
          svgRef.current[index]?.classList.add("paused");
        });
      } else {
        svgRef.current[index]?.addEventListener("animationiteration", () => {
          svgRef.current[index + 1]?.classList.remove("paused");
          svgRef.current[index]?.classList.add("paused");
        });
      }
    });
  }, [svgRef]);

  return (
    <>
      {isPostpone && (
        <div className="flex h-52 grow items-center justify-center gap-6 border-t">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <CircleIcon
                key={index}
                ref={(ref) => (svgRef.current[index] = ref)}
                fill="true"
                className="animate-loading-pulse paused"
              ></CircleIcon>
            );
          })}
        </div>
      )}
      <div className={cn("flex w-full flex-col", isPostpone && "hidden")}>
        {children}
      </div>
    </>
  );
};

export default SectionPostpone;
