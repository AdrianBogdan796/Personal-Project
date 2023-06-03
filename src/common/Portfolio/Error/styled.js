import styled from "styled-components";
import { boxShadow, borderRadius } from "../../../core/App/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 82px 0 140px 0;
  transition: 1s;
  color: ${({ theme }) => theme.elementColor.portfolio.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 40px 0 70px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.sM};
  }
`;

export const ErrorIcon = styled.img`
  width: 37px;
  height: 37px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.lXL};
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.S};
  }
`;

export const InfoWrapper = styled.div`
  margin: 0 0 48px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    margin: 0 0 32px 0;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.sXL};
  line-height: 1.4;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.S};
  }
`;

export const ButtonLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.sXL};
  line-height: 24px;
  color: ${({ theme }) => theme.elementColor.portfolio.errorLink};
  background-color: ${({ theme }) => theme.elementColor.portfolio.button};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  max-width: fit-content;
  margin: 0;
  text-decoration: none;
  transition: 0.3s;
  letter-spacing: 0.05em;
  border: 1px solid rgba(209, 213, 218, 0.1);
  cursor: pointer;

  &:visited {
    color: ${({ theme }) => theme.elementColor.portfolio.errorLink};
  }
`;
