// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";
import { IssueStatusSchema, TicketTypeSchema } from "../Dto";
import { PriorityLevelsSchema } from "../Dto/PriorityLevel";

export const IIssueSchema = z.object({
  id: z.string().or(z.number()),
  resume: z.string(),
  description: z.string(),
  date: z.string().or(z.date()),
  priority: PriorityLevelsSchema,
  type: TicketTypeSchema,
  status: IssueStatusSchema,
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  closedAt: z.string().or(z.date()).nullable(),
  createdBy: z.string().or(z.number()),
  updatedBy: z.string().or(z.number()),
  closedBy: z.number().or(z.string()).nullable(),
});

export type IIssue = z.infer<typeof IIssueSchema>;
