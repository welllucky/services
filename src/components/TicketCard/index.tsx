import { Selo } from "@/assets/Icons";
import { buildTestIds } from "@/utils";
import { MouseEventHandler } from "react";
import {
  IconeSelo,
  InfoLabel,
  OpeningText,
  StatusText,
  TicketContainer,
  TicketContent,
  TicketDescription,
  TicketNumber,
  TicketState,
  TicketStatus,
  TicketWrapper,
} from "./styles";

export type TicketCardProps = {
  id: string | number;
  nome: string;
  date: string;
  $status: string;
  isUpdated?: boolean;
  color?: string;
  $borderColor?: string;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const TicketCard = ({
  id,
  nome,
  date,
  $status,
  isUpdated,
  color,
  $borderColor,
}: Readonly<TicketCardProps>) => (
  <TicketWrapper
    {...buildTestIds("issue-wrapper")}
    color={color}
    $borderColor={$borderColor}
    $hasUpdate={isUpdated}
    href={`/chamado/${id}`}>
    {isUpdated && (
      <IconeSelo {...buildTestIds("icone-selo")}>
        <Selo />
      </IconeSelo>
    )}
    <TicketContainer {...buildTestIds("issue-container")}>
      <TicketContent
        {...buildTestIds("issue-content")}
        $hasUpdate={isUpdated}>
        <TicketNumber {...buildTestIds("issue-number")}>
          {`Chamado Nº ${id}`}
        </TicketNumber>
        <TicketDescription {...buildTestIds("issue-description")}>
          {nome}
        </TicketDescription>
      </TicketContent>
      <TicketState {...buildTestIds("issue-state")}>
        <TicketStatus {...buildTestIds("issue-status")}>
          <InfoLabel {...buildTestIds("info-label")}>Aberto em:</InfoLabel>
          <OpeningText {...buildTestIds("opening-text")}>{date}</OpeningText>
        </TicketStatus>
        <TicketStatus {...buildTestIds("issue-status")}>
          <InfoLabel {...buildTestIds("info-label")}>Status</InfoLabel>
          <StatusText {...buildTestIds("status-text")}>{$status}</StatusText>
        </TicketStatus>
      </TicketState>
    </TicketContainer>
  </TicketWrapper>
);

export { TicketCard };