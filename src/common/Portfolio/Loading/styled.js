import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.sXL};
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 82px 0 140px 0;
  color: ${({ theme }) => theme.elementColor.portfolio.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 40px 0 70px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: ${({ theme }) => theme.fontSize.sM};
  }
`;

export const Info = styled.p`
  margin: 0 0 48px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0 0 32px 0;
  }
`;

export const Spinner = styled.img`
  margin: 0;
  animation: spinner 1.5s linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    width: 80px;
    height: 80px;
  }
`;
