import { github, linkedin } from "../../personalInfo";
import { StyledIcon } from "./styled";
import { ReactComponent as githubIcon } from "./icons/githubIcon.svg";
import { ReactComponent as linkedinIcon } from "./icons/linkedinIcon.svg";

export const socialMedia = [
  {
    name: "github",
    link: github,
    Icon: StyledIcon(githubIcon),
  },
  {
    name: "linkedin",
    link: linkedin,
    Icon: StyledIcon(linkedinIcon),
  },
];
