// baseLayoutSize = based on A4 ( 1 cm : 10px ratio)
// - baseWidth = 210px
// - baseHeight = 297px

// mobileSize = baseSize * 1.5
// width < 320px
const mobileLayout: string = "w-[315px] h-[445.5px]";
const mobileProfilePicture: string = "w-[90px] h-[90px]";
const mobileTittle: string = "text-[18px]";
const mobileSectionHeader: string = "text-[9px]";
const mobileText: string = "text-[6px]";
const mobileCircleTimestamp: string = "w-[9px] h-[9px]";
const mobileBarTimestamp: string = "w-[1.5px] h-[9px]";

// smallSize = baseSize * 3
// width < 640px
const smallLayout: string = "sm:w-[630px] sm:h-[891px]";
const smallProfilePicture: string = "sm:w-[180px] sm:h-[180px]";
const smallTittle: string = "sm:text-[36px]";
const smallSectionHeader: string = "sm:text-[18px]";
const smallText: string = "sm:text-[12px]";
const smallCircleTimestamp: string = "sm:w-[18px] sm:h-[18px]";
const smallBarTimestamp: string = "sm:w-[3px] sm:h-[18px]";

// mediumSize = baseSize * 3.5
// width < 768px
const mediumLayout: string = "md:w-[735px] md:h-[1039.5px]";
const mediumProfilePicture: string = "md:w-[210px] md:h-[210px]";
const mediumTittle: string = "md:text-[42px]";
const mediumSectionHeader: string = "md:text-[21px]";
const mediumText: string = "md:text-[14px]";
const mediumCircleTimestamp: string = "md:w-[21px] md:h-[21px]";
const mediumBarTimestamp: string = "md:w-[3.5px] md:h-[21px]";

// largeSize = baseSize * 4.5
// width < 1024px
const largeLayout: string = "lg:w-[945px] lg:h-[1336.5px]";
const largeProfilePicture: string = "lg:w-[270px] lg:h-[270px]";
const largeTittle: string = "lg:text-[54px]";
const largeSectionHeader: string = "lg:text-[27px]";
const largeText: string = "lg:text-[18px]";
const largeCircleTimestamp: string = "lg:w-[27px] lg:h-[27px]";
const largeBarTimestamp: string = "lg:w-[4.5px] lg:h-[27px]";

const responsiveLayoutSize: string = `${mobileLayout} ${smallLayout} ${mediumLayout} ${largeLayout}`;
const responsiveProfilePictureSize: string = `${mobileProfilePicture} ${smallProfilePicture} ${mediumProfilePicture} ${largeProfilePicture}`;
const responsiveTittleSize: string = `${mobileTittle} ${smallTittle} ${mediumTittle} ${largeTittle}`;
const responsiveSectionHeaderSize: string = `${mobileSectionHeader} ${smallSectionHeader} ${mediumSectionHeader} ${largeSectionHeader}`;
const responsiveTextSize: string = `${mobileText} ${smallText} ${mediumText} ${largeText}`;
const responsiveCircleTimestampSize: string = `${mobileCircleTimestamp} ${smallCircleTimestamp} ${mediumCircleTimestamp} ${largeCircleTimestamp}`;
const responsiveBarTimestampSize: string = `${mobileBarTimestamp} ${smallBarTimestamp} ${mediumBarTimestamp} ${largeBarTimestamp}`;

export {
  responsiveLayoutSize,
  responsiveProfilePictureSize,
  responsiveTittleSize,
  responsiveSectionHeaderSize,
  responsiveTextSize,
  responsiveCircleTimestampSize,
  responsiveBarTimestampSize,
};
