"use client";

import { Header, Loading, NoContent } from "@/components";
import { PageContainer } from "@/styles";
import { useTheme } from "styled-components";
import { InfoDisplayData } from "../home/data";
import { MainContainer } from "../pesquisa/styles";
import InfoDisplay from "@/components/InfoDisplay";

const RequestsPage = () => {
  const theme = useTheme();
  const isLoading = false;
  const listaChamados = InfoDisplayData;

  return (
    <>
      <Header
        userName="Colaborador"
        pageTittle="Chamados solicitados"
      />
      <PageContainer>
        {isLoading ? (
          <Loading overlayOn={false} />
        ) : (
          <MainContainer $hasContent={!!listaChamados}>
            {listaChamados?.length ? (
              listaChamados.map((issue) => (
                <InfoDisplay
                  color="#9EDC72"
                  $borderColor="#61A12F"
                  key={issue.id}
                  id={issue.id}
                  nome={issue.nome}
                  date={issue.date}
                  $status={issue.$status}
                  isUpdated={issue.isUpdated}
                />
              ))
            ) : (
              <NoContent
                alt="caixa vazia"
                title="Não há solicitações no momento."
                color={theme.colors.neutral["55"]}
              />
            )}
          </MainContainer>
        )}
      </PageContainer>
    </>
  );
};

export { RequestsPage };
