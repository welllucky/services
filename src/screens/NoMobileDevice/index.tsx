"use client";

import Logo from "public/Icon.png";

import qrCode from "public/qr-code.png";
import {
  NoMobileContainer,
  NoMobileContent,
  NoMobileLogo,
  NoMobileQRCodeSection,
  NoMobileText,
  NoMobileTitle,
  QRCodeImage,
  QRCodeText,
} from "./styles";

export interface NoMobileDeviceProps {
  title: string;
  text: string;
}

const NoMobileDevicePage = ({ text, title }: NoMobileDeviceProps) => (
  <NoMobileContainer>
    <NoMobileLogo
      width={100}
      height={100}
      alt="Services logo"
      src={Logo}
      priority
    />
    <NoMobileContent>
      <NoMobileTitle>{title}</NoMobileTitle>
      <NoMobileText>{text}</NoMobileText>
    </NoMobileContent>
    <NoMobileQRCodeSection>
      <QRCodeText>
        Escaneie o QR Code para acessar o Services pelo seu celular
      </QRCodeText>
      <QRCodeImage
        src={qrCode}
        alt="QR Code"
        width={160}
        height={160}
        priority
      />
    </NoMobileQRCodeSection>
  </NoMobileContainer>
);

export { NoMobileDevicePage };
