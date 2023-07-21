import { responsiveTittleSize } from "./responsiveSize";

const TittleSection = () => {
  return (
    <div className={`w-full ${responsiveTittleSize}`}>
      <h1 className="uppercase font-bold ml-[6%] text-white">
        ahmad ihsan habibullah
      </h1>
    </div>
  );
};

export default TittleSection;
