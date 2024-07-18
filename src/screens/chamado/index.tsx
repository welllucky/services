"use client";

import { Loading } from "@/components";

import { issueApi } from "@/utils";
import { buildTestIds, resetForm } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  ActionButton,
  FormDisplay,
  InfoHistoryPainel,
  IssuePageBackButton,
  IssuePageTitle,
} from "./components";
import { IssuePageContainer, IssuePageContent } from "./styles";

export interface IssuePageProps {
  id: string;
}

const IssuePage = ({ id }: IssuePageProps) => {
  useEffect(() => {
    resetForm();
  }, []);

  const router = useRouter();
  const { data, isLoading } = issueApi.getIssue(id);

  if (isLoading) {
    return <Loading overlayOn />;
  }

  return (
    <IssuePageContainer $full>
      <IssuePageBackButton router={router} />
      <IssuePageTitle text={`Chamado n° ${data?.id}`} />
      <IssuePageContent
        {...buildTestIds("content-column")}
        height="100%">
        <FormDisplay data={data} />
        <InfoHistoryPainel
          data={data?.historic}
          isLoading={isLoading}
        />
      </IssuePageContent>
      <ActionButton />
    </IssuePageContainer>
  );
};

export { IssuePage };
