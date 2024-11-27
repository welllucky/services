import { Row } from "@/styles";
import styled, { css } from "styled-components";

export const PageTitle = styled.div<{ $isSmallClientMobile?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${({ $isSmallClientMobile }) =>
    $isSmallClientMobile &&
    css`
      padding: 0;
      justify-content: center;
    `}
`;

export const SecondSection = styled(Row)``;