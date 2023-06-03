import styled from "styled-components";
import { borderRadius, boxShadow, divider } from "../../../core/App/theme";

export const WrapperSkills = styled.section`
  max-width: 1216px;
  left: calc(50% - 1216px / 2 + 2px);
  background-color: ${({ theme }) => theme.elementColor.skills.background};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  padding-bottom: 32px;
  margin-bottom: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    margin-bottom: 50px;
  }
`;

export const Subheader = styled.h2`
  display: flex;
  align-content: center;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.sXXl};
  line-height: 36px;
  text-align: left;
  letter-spacing: 0.05em;
  padding: 32px 32px 0 32px;
  color: ${({ theme }) => theme.elementColor.subheader.title};
  transition: 0.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 26px;
    line-height: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.lM};
    line-height: 22px;
  }
`;

export const Icon = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lXL};
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSize.lM};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.sM};
    line-height: 19px;
  }
`;

export const Point = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 16px;
  background: ${({ theme }) => theme.elementColor.skills.point};
`;

export const SkillsList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: space-between;
  margin: 32px 0 0;
  grid-gap: 8px;
  padding-left: 0;
`;

export const Divider = styled.div`
  max-width: 1151px;
  height: 1px;
  margin-left: 32px;
  margin-right: 32px;
  background: ${divider};
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lM};
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.elementColor.skills.text};
  transition: 1s;
  margin: 0 32px;
  line-height: 1.4;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.S};
    line-height: 17px;
  }
`;
