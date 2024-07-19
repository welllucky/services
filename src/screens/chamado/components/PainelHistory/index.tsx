import { InfoUnityProps } from "@/types";
import { FileDashed } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Loading, NoContent } from "../../../../components";
import { InfoUnity } from "./InfoUnity";
import {
  InfoHistoryPainelContainer,
  InfoHistoryPainelContent,
  InfoHistoryPainelTitle,
} from "./styles";
import { useTicket } from "@/utils";

interface InfoHistoryPainelProps {
  data?: InfoUnityProps[];
  isLoading?: boolean;
}

const InfoHistoryPainel = ({ data, isLoading }: InfoHistoryPainelProps) => {
  const theme = useTheme();

  if (isLoading) {
    return <Loading color={theme.colors.primary["35"]} />;
  }

  const { historic } = useTicket();

  const events = historic || data;

  if (!events) {
    return (
      <NoContent
        icon={
          <FileDashed
            size={64}
            color={theme.colors.neutral["45"]}
          />
        }
        title="Ops! Esse chamado ainda não possui movimentações"
        fontSize="16px"
        color={theme.colors.neutral["45"]}
      />
    );
  }

  return (
    <InfoHistoryPainelContainer $hasContent={events.length !== 0}>
      <InfoHistoryPainelTitle>Histórico</InfoHistoryPainelTitle>
      <InfoHistoryPainelContent>
        {events.map((info) => (
          <InfoUnity {...info} />
        ))}
      </InfoHistoryPainelContent>
    </InfoHistoryPainelContainer>
  );
};

export { InfoHistoryPainel };
