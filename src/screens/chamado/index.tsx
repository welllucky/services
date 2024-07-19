"use client";

import { Loading } from "@/components";

import { ITicket } from "@/types";
import { buildTestIds, resetForm } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  IssueActionButton,
  FormDisplay,
  InfoHistoryPainel,
  TicketPageBackButton,
  TicketPageTitle,
} from "./components";
import { TicketPageContainer, TicketPageContent } from "./styles";

export interface TicketPageProps {
  data: ITicket;
}

const TicketPage = ({ data }: TicketPageProps) => {
  useEffect(() => {
    resetForm();
  }, []);

  const router = useRouter();

  if (!data) {
    return <Loading overlayOn />;
  }

  return (
    <TicketPageContainer $full>
      <TicketPageBackButton router={router} />
      <TicketPageTitle text={`Chamado n° ${data?.id}`} />
      <TicketPageContent
        {...buildTestIds("content-column")}
        height="100%">
        <FormDisplay data={data} />
        <InfoHistoryPainel
          data={data?.historic}
          isLoading={!data}
        />
      </TicketPageContent>
      <IssueActionButton />
    </TicketPageContainer>
  );
};

export { TicketPage };
