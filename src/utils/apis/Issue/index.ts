import { IOpenTicketForm } from "@/app/(protected)/(form)/template";
import { ITicket } from "@/types";
import { httpClient } from "@/utils/abstractions";

export class IssueApi {
  private base_url: string | undefined;
  private api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/tickets/`;
  }

  getIssue = (id: string) => {
    const { data, error, isLoading } = httpClient<ITicket>(
      `${this.api_url}${id}`,
    );
    return { data, error, isLoading };
  };

  getIssues = () => {
    const { data, error, isLoading } = httpClient<ITicket[]>(`${this.api_url}`);
    return { data, error, isLoading };
  };

  createIssue = (issueData: IOpenTicketForm) => {
    const { error, isLoading } = httpClient(`${this.api_url}?issue_id`, "POST");
    return { error, isLoading };
  };
}
