import styled, { css } from "styled-components";
import { Subheader } from "../Skills/SkillsInner/styled";
import { ReactComponent as githubIcon } from "./github/github.svg";

export const WrapperPortfolio = styled.section`
  text-align: center;
  margin: 72px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    margin: 60px 0;
  }
`;

export const LinkPortfolio = styled.a`
  text-decoration: none;
`;

export const HeaderPortfolio = styled(Subheader)`
  text-align: center;
  margin: 0 0 8px 0;
  padding-top: 8px;
  display: grid;
`;

export const GitHubIcon = styled(githubIcon)`
  width: 40px;
  height: 40px;
  transition: 0.5s;

  fill: ${({ theme }) => theme.elementColor.portfolio.icon};
  &:hover {
    filter: brightness(120%);
  }
`;

export const SubHeaderPortfolio = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.sXL};
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.elementColor.subheader.title};
  transition: 1s;
  margin: 0;
  padding-bottom: 24px;
`;

export const WrapperRepos = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  transition: 1s;

  ${({ notSuccess }) =>
    notSuccess &&
    css`
      grid-template-columns: auto;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
