import { personalInfo } from "../.././personalInfo";
import SkillsInner from "./SkillsInner";

const SectionSkills = () => {
  return (
    <>
      {personalInfo.map((sectionInfo) => (
        <SkillsInner
          key={sectionInfo.title}
          title={sectionInfo.title}
          icon={sectionInfo.icon}
          list={sectionInfo.list}
        />
      ))}
    </>
  );
};

export default SectionSkills;
