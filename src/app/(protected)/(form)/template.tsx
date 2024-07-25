"use client";

import { BackButton, FormButtons } from "@/components";
import { TicketPageContainer } from "@/screens/Ticket/styles";
import { Column, Row, TitleComponent } from "@/styles";
import { IOpenTicketForm } from "@/types";
import { buildTestIds, resetForm, useModalStore } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface PageRouterData {
  page: string;
  title: string;
  hasBackButton?: boolean;
}

const Template = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathName = usePathname();
  const { push, back } = useRouter();
  const shouldOpenModal = useModalStore((state) => state.open);
  const pagesTitles = useMemo(
    () =>
      [
        {
          page: "/abrir-chamado",
          title: "O que aconteceu?",
          hasBackButton: false,
        },
        // {
        //   page: "/anexar-midia",
        //   title: "Anexar mídia",
        //   hasBackButton: true
        // },
        {
          page: "/confirmar-chamado",
          title: "Confirmar informações",
          hasBackButton: true,
        },
      ] as PageRouterData[],
    [],
  );

  const idChamado = 2400;

  const actualPage = useMemo(
    () => pagesTitles.find((page) => page.page === pathName),
    [pathName, pagesTitles],
  );

  const indexPageFinder = useMemo(
    () => pagesTitles.indexOf(actualPage as unknown as PageRouterData),
    [actualPage, pagesTitles],
  );

  const nextPageUrl = useMemo(
    // eslint-disable-next-line no-confusing-arrow
    () =>
      indexPageFinder === -1
        ? "/"
        : indexPageFinder + 1 >= pagesTitles.length
          ? `/chamado/${idChamado}`
          : pagesTitles[indexPageFinder + 1].page,
    [indexPageFinder, pagesTitles],
  );

  const previousPageUrl = useMemo(
    () => (indexPageFinder === 0 ? "" : pagesTitles[indexPageFinder - 1].title),
    [indexPageFinder, pagesTitles],
  );

  const methods = useForm<IOpenTicketForm>({
    mode: "onChange",
    defaultValues: {
      resume: "",
      description: "",
      date: "",
      type: "problem",
      priority: "low",
    },
    reValidateMode: "onChange",
    shouldFocusError: true,
    progressive: true,
  });

  return (
    <FormProvider
      {...buildTestIds("form-provider")}
      {...methods}
      key="open-ticket-form">
      <TicketPageContainer
        {...buildTestIds("issue-page-container")}
        height="100%">
        <Row {...buildTestIds("back-button-row")}>
          <BackButton
            {...buildTestIds("back-button")}
            onClick={() => {
              if (actualPage?.page === pagesTitles[0].page) {
                resetForm();
                push("/");
              } else {
                back();
              }
            }}
            actionText={
              actualPage?.page === pagesTitles[0].page
                ? "voltar"
                : previousPageUrl
            }
          />
        </Row>
        <Column
          {...buildTestIds("content-column")}
          height="100%"
          $gap="12px">
          <TitleComponent {...buildTestIds("page-step-form-title")}>
            {actualPage?.title}
          </TitleComponent>
          {children}
          <FormButtons
            {...buildTestIds("form-buttons")}
            canNext={methods.formState.isValid}
            nextPage={nextPageUrl}
            hasBackButton={actualPage?.hasBackButton}
            onClickNextButton={
              actualPage?.page === pagesTitles[pagesTitles.length - 1].page
                ? shouldOpenModal
                : undefined
            }
          />
        </Column>
      </TicketPageContainer>
    </FormProvider>
  );
};

export default Template;
