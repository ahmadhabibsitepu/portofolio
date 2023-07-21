import SectionHeader from "./SectionHeader";
import { responsiveTextSize } from "./responsiveSize";

type profileDetail = {
  label: string;
  value?: string;
};

type profileData = {
  profileName: string;
  profileDetails: profileDetail[];
};

type profileDatas = profileData[];

const ProfileDetailList = ({
  profileDetails,
}: {
  profileDetails: profileDetail[];
}) => {
  return (
    <div className={`mx-[4%] mt-[4%] ${responsiveTextSize}`}>
      {profileDetails.map((value: profileDetail, index) => (
        <div key={index}>
          <h3 className="font-bold">{value.label}</h3>
          <p className="tracking-tight">{value.value}</p>
        </div>
      ))}
    </div>
  );
};

const ProfileSection = ({ profileDatas }: { profileDatas: profileDatas }) => {
  return (
    <section>
      {profileDatas.map((value: profileData, index) => (
        <div key={index} className="mt-[4%]">
          <SectionHeader text={value.profileName}></SectionHeader>
          <ProfileDetailList
            profileDetails={value.profileDetails}
          ></ProfileDetailList>
        </div>
      ))}
    </section>
  );
};

export default ProfileSection;
