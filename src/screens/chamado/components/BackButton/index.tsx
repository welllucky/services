import { BackButton } from "@/components";
import { Row } from "@/styles";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type IssuePageBackButtonProps = {
  router: AppRouterInstance;
};

export const IssuePageBackButton = ({ router }: IssuePageBackButtonProps) => {
  return (
    <Row>
      <BackButton
        onClick={() => router.push("/")}
        actionText="chamados"
      />
    </Row>
  );
};
