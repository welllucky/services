import { IOpenTicketForm } from "@/app/(protected)/(form)/template";
import { ITicket } from "@/types";
import { httpClient } from "@/utils/abstractions";

export class TicketApi {
  private base_url: string | undefined;
  private api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/tickets/`;
  }

  getTicket = (id: string) => {
    const { data, error, isLoading } = httpClient<ITicket>(
      `${this.api_url}${id}`,
    );
    return { data, error, isLoading };
  };

  getTickets = () => {
    const { data, error, isLoading } = httpClient<ITicket[]>(`${this.api_url}`);
    return { data, error, isLoading };
  };

  createTicket = (TicketData: IOpenTicketForm) => {
    const { error, isLoading } = httpClient(`${this.api_url}?Ticket_id`, "POST");
    return { error, isLoading };
  };
}
