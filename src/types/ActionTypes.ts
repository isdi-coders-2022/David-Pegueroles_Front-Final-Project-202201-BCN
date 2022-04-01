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

export interface AppointmentAction extends Action {
  appointment: Appointment;
}

export interface DeleteAction extends Action {
  id: string | undefined;
}

export interface CreateAppointmentAction extends Action {
  appointment: Appointment;
}
