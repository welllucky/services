"use client";

import { ITicket } from "@/types";
import { Header, Loading, NoContent } from "@/components";
import { TicketCard } from "@/components/TicketCard";
import { PageContainer } from "@/styles";
import { useTheme } from "styled-components";
import { MainContainer } from "../Search/styles";

const RequestsPage = () => {
  const theme = useTheme();
  const isLoading = false;

  const listaChamados = [] as ITicket[];

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
                <TicketCard
                  color="#9EDC72"
                  $borderColor="#61A12F"
                  key={issue.id}
                  id={issue.id}
                  nome={issue.resume}
                  date={issue.date}
                  $status={issue.status}
                  isUpdated
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
