import styled from "styled-components";
import { boxShadow, borderRadius } from "../../core/App/theme";

export const WrapperHeader = styled.header`
  display: grid;
  grid-template-columns: auto auto auto;
  max-width: 1200px;
  padding: 0 0 64px;
  transition: background 1s linear, color 1s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    grid-template-columns: auto auto;
    padding: 0 0 48px;
  }
`;

export const ImageHeader = styled.img`
  width: 300px;
  height: 360px;
  border-radius: 50%;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 160px;
    height: 160px;
    margin-bottom: 13px;
  }
`;

export const Details = styled.div`
  display: grid;
  margin-left: 66px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    grid-row-start: 2;
    margin-left: 0;
  }
`;

export const DescriptionHeader = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.sXL};
  line-height: 1.4;
  margin: 0 0 32px 0;
  text-align: justify;
  color: ${({ theme }) => theme.elementColor.header.description};
  transition: background 1s linear, color 1s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.M};
    margin: 0 0 24px 0;
  }
`;

export const ThisIs = styled.span`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.XS};
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.elementColor.header.description};
  margin: 0 0 12px 0;
  transition: background 1s linear, color 1s linear;
`;

export const MyName = styled.h1`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.lXXL};
  margin: 0 0 36px 0;
  color: ${({ theme }) => theme.elementColor.header.text};
  transition: background 1s linear, color 1s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 28px;
    margin: 0 0 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.XL};
    margin: 0 0 16px;
  }
`;

export const ButtonHireMe = styled.a`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.sXL};
  color: ${({ theme }) => theme.elementColor.header.emailText};
  background-color: ${({ theme }) => theme.elementColor.header.button};
  padding: 12px 16px;
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  max-width: fit-content;
  margin: 0;
  gap: 16px;
  text-decoration: none;
  transition: 0.3s;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
    gap: 12px;
  }

  &:hover {
    box-shadow: 2px -2px 0 ${({ theme }) => theme.elementColor.header.link},
      -2px 2px 0 ${({ theme }) => theme.elementColor.header.link},
      2px 2px 0 ${({ theme }) => theme.elementColor.header.link},
      -2px -2px 0 ${({ theme }) => theme.elementColor.header.link};
  }

  &:focus {
    box-shadow: inset 0 2px 0 rgba(20, 70, 32, 0.2);
    border-radius: ${borderRadius};
  }
`;

export const Envelope = styled.img`
  margin: 0;
  height: 20px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    height: 14px;
  }
`;
