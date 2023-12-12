"use client";
import { useEffect, useState } from "react";
import { jobTitles } from "@/lib/staticData";

const HeroJobTitle = ({
  jobTitleAnimationStart = false,
}: {
  jobTitleAnimationStart: Boolean;
}) => {
  const [caretAnimation, setCaretAnimation] = useState<boolean>(true);
  const [jobTitle, setJobTitle] = useState<String>("");
  const [currentJobTitle, setCurrentJobTitle] = useState<String>(jobTitles[0]);

  useEffect(() => {
    jobTitleAnimationStart &&
      (() => {
        let displayTitle: string = "";

        Array.from(currentJobTitle).map((char, index) => {
          setTimeout(
            () => {
              displayTitle += char;
              setJobTitle(displayTitle);
              caretAnimation && setCaretAnimation(false);
            },
            80 * (index + 1),
          );
          index === Array.from(currentJobTitle).length - 1 &&
            setTimeout(
              () => {
                setCaretAnimation(true);
              },
              80 * (index + 1),
            );
        });

        setTimeout(() => {
          !caretAnimation && setCaretAnimation(true);
          switch (currentJobTitle) {
            case jobTitles[0]:
              setCurrentJobTitle(jobTitles[1]);
              break;
            case jobTitles[1]:
              setCurrentJobTitle(jobTitles[2]);
              break;
            case jobTitles[2]:
              setCurrentJobTitle(jobTitles[0]);
              break;
            default:
              break;
          }
        }, 5000);
      })();
  }, [currentJobTitle, jobTitleAnimationStart]);

  return (
    <>
      {jobTitle}
      <span
        className={caretAnimation ? "animate-caret" : "animate-none"}
        aria-hidden={true}
      >
        |
      </span>
    </>
  );
};

export default HeroJobTitle;
