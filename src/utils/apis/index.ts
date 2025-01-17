import { IssueApi } from "./Issue";
import { SearchApi } from "./Search";
import { TicketApi } from "./Ticket";
import { UserApi } from "./User";

export const ticketApi = new TicketApi();
export const issueApi = new IssueApi();
export const searchApi = new SearchApi();
export const userApi = new UserApi();
