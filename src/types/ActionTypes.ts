import { Appointment } from "./Appointment";

export interface Action {
  type: string;
}

export interface AppointmentsAction extends Action {
  appointments: Appointment[];
}

export interface NavigationPositionAction extends Action {
  navigationPosition: number;
}
