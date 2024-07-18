import { Row, TitleComponent } from "@/styles";

type IssuePageTitleProps = {
  text: string;
};

export const IssuePageTitle = ({ text }: IssuePageTitleProps) => {
  return (
    <Row>
      <TitleComponent>{text}</TitleComponent>
    </Row>
  );
};
