import Image from "next/image";

import { responsiveProfilePictureSize } from "./responsiveSize";
import profilePicture from "../../../public/profilePicture.png";

const ProfilePictureSection = () => {
  return (
    <div
      className={`${responsiveProfilePictureSize} bg-white rounded-full flex justify-center items-center relative overflow-hidden`}
    >
      <Image
        src={profilePicture}
        alt="img"
        fill
        placeholder="blur"
        className="rounded-full object-contain absolute scale-150"
      ></Image>
    </div>
  );
};

export default ProfilePictureSection;
