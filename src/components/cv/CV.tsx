import Image from "next/image";

import AboutSection from "./AboutSection";
import ProfilePictureSection from "./ProfilePictureSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProfileSection from "./ProfileSection";
import SkillSection from "./SkillSection";
import TittleSection from "./TittleSection";
import { responsiveLayoutSize } from "./responsiveSize";
import headerImage from "../../../public/headerPattern.png";

const CV = () => {
  const profileDatas = [
    {
      profileName: "personal details",
      profileDetails: [
        {
          label: "Full Name",
          value: "Ahmad Ihsan Habibullah",
        },
        {
          label: "Nickname",
          value: "Habib",
        },
        {
          label: "Place and Date of Birth",
          value: "Medan, 17 April 1998",
        },
        {
          label: "Gender",
          value: "Male",
        },
        {
          label: "Religion",
          value: "Islam",
        },
      ],
    },
    {
      profileName: "contact",
      profileDetails: [
        {
          label: "Phone",
          value: "082218802442",
        },
        {
          label: "Email",
          value: "ahmadhabibsitepu@gmail.com",
        },
        {
          label: "Address",
          value: "Jl. Bunga Melur No.28, Pasar III, Tanjung Sari, Medan",
        },
      ],
    },
    {
      profileName: "language",
      profileDetails: [
        {
          label: "Indonesian (Native)",
        },
        {
          label: "English (Passive)",
        },
      ],
    },
  ];

  const educations = [
    {
      location: "SDIT Al-Hijrah, Medan",
      description: "",
      year: "2004-2010",
    },
    {
      location: "SMPIT Al-Fityan School, Medan",
      description: "",
      year: "2010-2013",
    },
    {
      location: "SMAT Krida Nusantara, Bandung",
      description: "",
      year: "2013-2016",
    },
    {
      location: "S-1 Ilmu Komputer, Universitas Sumatera Utara",
      description: "IPK 3.74",
      year: "2016-2022",
    },
  ];

  const workExperiences = [
    {
      location: "Dinas Kominfo Provinsi Sumatera Utara",
      duration: "jun 2019 - aug 2019",
      description:
        "Member of Application Development for E-Government Services Section (Internship)",
    },
    {
      location: "PT Pelindo Multi Terminal",
      duration: "nov 2022 - jun 2023",
      description:
        "Member of Commercial and Customer Relations Division (Internship)",
    },
  ];

  const organizationalExperiences = [
    {
      location: "IMILKOM USU",
      duration: "aug 2018 - aug 2022",
      description: "Member of the Organization",
    },
  ];

  const skills = [
    {
      skillCategory: "frontend",
      skillDetails: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        { label: "Framework", list: ["Tailwind CSS", "React JS", "Next JS"] },
      ],
    },
    {
      skillCategory: "backend",
      skillDetails: [
        "JavaScript",
        "TypeScript",
        "Node JS",
        "REST API",
        { label: "Framework", list: ["Express JS"] },
      ],
    },
    {
      skillCategory: "database",
      skillDetails: [
        "MySQL",
        "MongoDB",
        { label: "Tools", list: ["Prisma", "Mongoose"] },
      ],
    },
  ];

  return (
    <div className={responsiveLayoutSize}>
      <div className="w-full h-full flex flex-col">
        {/* header */}
        <div className="w-full h-[25%] flex relative">
          <Image
            src={headerImage}
            alt="img"
            fill
            placeholder="blur"
            className="absolute brightness-75"
          ></Image>
          <div className="w-2/6 h-full flex justify-center items-center relative">
            <ProfilePictureSection></ProfilePictureSection>
          </div>
          <div className="w-4/6 h-3/4 flex justify-center items-center relative">
            <TittleSection></TittleSection>
          </div>
        </div>
        {/* body */}
        <div className="w-full h-[55%] flex relative">
          {/* personal data */}
          <div className="w-2/6 h-full">
            <ProfileSection profileDatas={profileDatas}></ProfileSection>
          </div>
          {/* biografi */}
          <div className="w-4/6 -mt-[10%] pt-[4%] pl-[3%] bg-white">
            <AboutSection></AboutSection>
            <EducationSection educations={educations}></EducationSection>
            <ExperienceSection
              text="work experience"
              experiences={workExperiences}
            ></ExperienceSection>
            <ExperienceSection
              text="organizational experience"
              experiences={organizationalExperiences}
            ></ExperienceSection>
          </div>
        </div>
        {/* footer */}
        <div className="w-full h-[20%]">
          <SkillSection skills={skills}></SkillSection>
        </div>
      </div>
    </div>
  );
};

export default CV;
