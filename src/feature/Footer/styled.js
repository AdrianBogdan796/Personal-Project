import styled from "styled-components";

export const WrapperFooter = styled.footer`
  align-items: left;
  width: 670px;
  padding: 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 48px 8px 30px;
    width: 100%;
  }
`;

export const Address = styled.address`
  font-style: unset;
`;

export const StyledEmail = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.elementColor.footer.email};
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.XXL};
  line-height: 39px;
  letter-spacing: 0.05em;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.elementColor.footer.emailHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSize.sXL};
    line-height: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.sM};
    line-height: 22px;
  }
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.elementColor.footer.intro};
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.XS};
  line-height: 1.3;
  text-align: left;
  margin: 24px 0;
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    margin: 16px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    margin: 12px 0;
  }
`;

export const StyledText = styled.p`
  margin: 24px 0 0 0;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lM};
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-align: left;
  transition: all 1s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.S};
    margin: 12px 0 0 0;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  gap: 24px;
  padding: 40px 0 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.elementColor.footer.text};
  text-decoration: none;
`;

export const StyledIcon = (Icon) => styled(Icon)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.elementColor.footer.icon};
  transition: 0.5s;

  &:hover {
    fill: ${({ theme }) => theme.elementColor.footer.hoverIcon};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;
