import { Row, breakpoints } from "@/styles";
import Image from "next/image";
import styled, { css } from "styled-components";

export const NoMobileContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
`;

export const NoMobileContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const NoMobileLogo = styled(Image)`
  margin: 4rem;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const NoMobileTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green.default};
  line-height: 130%;
  text-align: center;
  text-wrap: balance;

  @media (min-width: 769px) {
    font-size: 260%;
  }
`;

export const NoMobileText = styled.p`
  color: ${({ theme }) => theme.colors.neutral.inverted};
  line-height: 140%;
  font-weight: 500;
  text-align: center;
  font-size: 1rem;
  text-wrap: balance;

  @media (min-width: 769px) {
    font-size: 160%;
  }
`;

export const NoMobileQRCodeSection = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
  gap: 1.2rem;

  @media (min-width: 769px) {
    gap: 2rem;
    flex-direction: row-reverse;
  }
`;

export const QRCodeText = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
  text-align: center;
  width: 20rem;
  color: #0e0e0e;

  @media (min-width: 769px) {
    font-size: 120%;
    width: 20rem;
    text-align: left;
    line-height: 140%;
  }
`;

export const QRCodeImage = styled(Image)`
  @media (min-width: 769px) {
    width: 160px;
    height: 160px;
  }
`;
