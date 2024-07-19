import { ITicket } from "@/assets";
import { createStore } from "zustand";
import { immer } from "zustand/middleware/immer";

interface TicketProps extends ITicket {}

interface TicketState extends TicketProps {
  initialize: () => void;
  block: () => void;
  reOpen: () => void;
  close: () => void;
  update: (data: Partial<TicketProps>) => void;
}

type TicketStore = ReturnType<typeof createTicketStore>;

const createTicketStore = (initProps?: Partial<TicketProps>) => {
  const DEFAULT_PROPS: TicketProps = {
    description: "",
    id: "0",
    priority: "baixa",
    resume: "",
    status: "notStarted",
    type: "",
    historic: [],
    sector: "",
    unity: "",
    date: "",
  };
  return createStore<TicketState>()(
    immer((set) => ({
      ...DEFAULT_PROPS,
      ...initProps,
      initialize: () =>
        set((state) => {
          state.status = "inProgress";
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi aberto",
          });
        }),
      block: () =>
        set((state) => {
          state.status = "blocked";
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi bloqueado",
          });
        }),
      reOpen: () =>
        set((state) => {
          state.status = "inProgress";
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi reaberto",
          });
        }),
      close: () =>
        set((state) => {
          state.status = "closed";
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi fechado",
          });
        }),
      update: (data) =>
        set((state) => {
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi atualizado",
          });
          Object.assign(state, data);
        }),
    })),
  );
};


export {type TicketStore, createTicketStore};