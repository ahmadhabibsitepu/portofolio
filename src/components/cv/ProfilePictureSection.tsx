import Image from "next/image";

import { responsiveProfilePictureSize } from "./responsiveSize";
import profilePicture from "../../../public/profilePicture.jpg";

const ProfilePictureSection = () => {
  return (
    <div
      className={`${responsiveProfilePictureSize} bg-white rounded-full flex justify-center items-center relative overflow-hidden`}
    >
      <Image
        src={profilePicture}
        alt="img"
        placeholder="blur"
        className="rounded-full object-contain absolute scale-110 pointer-events-none"
      ></Image>
    </div>
  );
};

export default ProfilePictureSection;
