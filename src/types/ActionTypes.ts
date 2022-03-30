import { Appointment } from "./Appointment";

export interface Action {
  type: string;
}

export interface AppointmentsAction extends Action {
  appointments: Appointment[];
}
