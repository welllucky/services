import { LargeFieldset } from "@/components/Fieldset/LargeFieldset";
import { SmallFieldset } from "@/components/Fieldset/SmallFieldset";
import { SectionInfoForm } from "@/screens/OpenIssue/ConfirmMedia/styles";
import { IssueDto } from "@/types";
import { FormDisplayContainer } from "./styles";

type FormDisplayProps = {
  data: IssueDto | undefined;
};

export const FormDisplay = ({ data }: FormDisplayProps) => (
  <FormDisplayContainer>
    <SmallFieldset title="Resumo">{data?.resume}</SmallFieldset>
    <LargeFieldset title="Descrição">{data?.description}</LargeFieldset>
    <SectionInfoForm $gap="16px">
      <SmallFieldset title="Tipo">{data?.type}</SmallFieldset>
      <SmallFieldset title="Prioridade">{data?.priority}</SmallFieldset>
    </SectionInfoForm>
    <SmallFieldset title="Data do ocorrido">{data?.date ?? ""}</SmallFieldset>
  </FormDisplayContainer>
);
