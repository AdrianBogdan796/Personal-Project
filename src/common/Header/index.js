import {
  WrapperHeader,
  ImageHeader,
  DescriptionHeader,
  ThisIs,
  MyName,
  ButtonHireMe,
  Details,
  Envelope,
} from "./styled";
import SwitchTheme from "./ThemeSwitch/";
import Image from "./images/20230530_175818.jpg";
import envelope from "./images/envelope.svg";
import { email } from "../../personalInfo";

const SectionHeader = ({ theme, toggleTheme }) => {
  return (
    <WrapperHeader>
      <ImageHeader src={Image} alt="Adrian Bogdan photo" />
      <Details>
        <ThisIs>THIS IS</ThisIs>
        <MyName>Adrian Bogdan </MyName>
        <DescriptionHeader>
          I am a beginning Frontend Developer, who is looking for a job. I want
          to improve my skills in this profession.
        </DescriptionHeader>
        <ButtonHireMe href={`mailto:${email}`} title={email}>
          <Envelope src={envelope} alt="" />
          Hire me
        </ButtonHireMe>
      </Details>
      <SwitchTheme theme={theme} toggleTheme={toggleTheme} />
    </WrapperHeader>
  );
};

export default SectionHeader;
