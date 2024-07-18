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

interface InfoHistoryPainelProps {
  data?: InfoUnityProps[];
  isLoading?: boolean;
}

const InfoHistoryPainel = ({ data, isLoading }: InfoHistoryPainelProps) => {
  const theme = useTheme();

  if (isLoading) {
    return <Loading color={theme.colors.primary["35"]} />;
  }

  if (!data) {
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
    <InfoHistoryPainelContainer $hasContent={data.length !== 0}>
      <InfoHistoryPainelTitle>Histórico</InfoHistoryPainelTitle>
      <InfoHistoryPainelContent>
        {data.map((info) => (
          <InfoUnity {...info} />
        ))}
      </InfoHistoryPainelContent>
    </InfoHistoryPainelContainer>
  );
};

export { InfoHistoryPainel };
