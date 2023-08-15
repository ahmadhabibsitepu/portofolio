"use client";
import { Button } from "../button";

const DownloadButton = ({
  text,
  version,
}: {
  text: string;
  version: string;
}) => {
  const downloadHandler = async () => {
    // return await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/download/${version}`
    // );
    const pdfFilePath = "/CV Ahmad Ihsan Habibullah.pdf";
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.target = "_blank";
    link.download = "CV Ahmad Ihsan Habibullah.pdf";
    link.click();
  };

  return (
    <Button
      onClick={downloadHandler}
      variant={"outline"}
      className="h-full w-full border-2 border-slate-900 text-lg font-semibold shadow-md sm:text-xl md:text-2xl"
    >
      Download {text}
    </Button>
  );
};
export default DownloadButton;
