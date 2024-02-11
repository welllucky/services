"use client";

import { CustomFieldset } from "@/components/Fieldset";
import { ConfirmDetailsContainer, SectionInfoForm } from "./styles";
import { useTheme } from "styled-components";
import { LS_KEY_1_TICKET_RECORD, useModalStore } from "@/utils";
import { IOpenTicketForm } from "@/app/(app)/(form)/template";
import { dataFormatter } from "@/utils/functions";
import { ConfirmModal } from "@/components";
import { Check } from "@phosphor-icons/react";

export const ConfirmDetailsPage = () => {
  const theme = useTheme();
  const ticketData: IOpenTicketForm = JSON.parse(
    localStorage.getItem(LS_KEY_1_TICKET_RECORD) as unknown as string
  );
  const isModalOpen = useModalStore((state) => state.isOpen);
  const modalCallback = useModalStore((state) => state.modalCallback);

  return (
    <>
      <ConfirmModal
        isOpen={isModalOpen}
        testId="confirm-issue-modal"
        successText="Chamado registrado com sucesso!"
        confirmationText="Deseja realmente abrir
        o chamado?"
        hasBackButton
        confirmCallBack={modalCallback}
      />
      <ConfirmDetailsContainer $gap="16px">
        <SectionInfoForm>
          <CustomFieldset
            color={theme.colors.green.default}
            labelText="Resumo"
            width="100%"
            height="64px">
            {ticketData?.resumo}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm $gap="16px">
          <CustomFieldset
            color={theme.colors.green.default}
            labelText="Tipo"
            width="48%"
            height="64px">
            {ticketData?.tipo}
          </CustomFieldset>
          <CustomFieldset
            color={theme.colors.green.default}
            labelText="Prioridade"
            width="48%"
            height="64px">
            {ticketData?.prioridade}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm>
          <CustomFieldset
            color={theme.colors.green.default}
            labelText="Data do ocorrido"
            width="100%"
            height="64px">
            {dataFormatter(ticketData?.data)}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm>
          <CustomFieldset
            color={theme.colors.green.default}
            labelText="Descrição"
            width="100%"
            height="160px">
            {ticketData?.descricao}
          </CustomFieldset>
        </SectionInfoForm>
      </ConfirmDetailsContainer>
    </>
  );
};
