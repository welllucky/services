import { TicketController } from "@/server/controllers";
import { NextRequest } from "next/server";

type TicketParamProps = {
  id: string;
};

export async function GET(
  req: NextRequest,
  { params }: { params: TicketParamProps },
) {
  return TicketController.getTicketById(req, params);
}

export const runtime = "nodejs";
