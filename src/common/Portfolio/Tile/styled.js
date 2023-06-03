import styled from "styled-components";
import { borderRadius, boxShadow } from "../../../core/App/theme";

export const WrapperTile = styled.div`
  background: ${({ theme }) => theme.elementColor.portfolio.background};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  padding: 56px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lM};
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-align: left;
  transition: 0.5s;
  &:hover {
    border: 6px solid ${({ theme }) => theme.elementColor.portfolio.tileHover};
    box-shadow: ${boxShadow};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    padding: 36px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 16px;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.lXL};
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.elementColor.portfolio.title};
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.sM};
    line-height: 1.2;
    margin-bottom: 16px;
  }
`;

export const Descriprion = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lM};
  line-height: 1.4;
  color: ${({ theme }) => theme.elementColor.portfolio.description};

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 17px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.S};
    line-height: 1.2;
    margin: 0 0 8px 0;
  }
`;

export const LinksWrapper = styled.dl`
  display: grid;
  grid-template-columns: 4em 1fr;
  margin: 24px 0 0 0;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lM};
  line-height: 1.4;
  color: ${({ theme }) => theme.elementColor.portfolio.description};

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSize.M};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
    margin: 16px 0 0 0;
  }
`;

export const Demo = styled(Descriprion)`
  margin: 8px 0 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.S};
    line-height: 1.2;
  }
`;

export const Repo = styled(Descriprion)`
  margin: 8px 0 0 0;
`;

export const LinkWrapper = styled.div`
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 17px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lM};
  line-height: 1.4;
  color: ${({ theme }) => theme.elementColor.portfolio.link};
  transition: 0.3s;
  text-decoration: none;
  opacity: 0.8;
  border-bottom: 1px solid
    ${({ theme }) => theme.elementColor.portfolio.underline};

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSize.M};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.S};
    line-height: 1.2;
  }
`;
