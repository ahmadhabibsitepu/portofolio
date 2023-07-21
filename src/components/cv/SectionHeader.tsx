import { responsiveSectionHeaderSize } from "./responsiveSize";

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <div
      className={`w-full bg-gradient-to-r from-neutral-800 to-neutral-400 flex justify-start items-center ${responsiveSectionHeaderSize}`}
    >
      <h2 className="text-white font-bold pl-[3%] capitalize">{text}</h2>
    </div>
  );
};

export default SectionHeader;
