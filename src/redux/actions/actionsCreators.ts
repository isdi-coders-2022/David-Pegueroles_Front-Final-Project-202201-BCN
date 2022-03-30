import { AppointmentsAction } from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import actionsTypes from "./actionsTypes";

export const loadAppointmentsAction = (
  appointments: Appointment[]
): AppointmentsAction => ({
  type: actionsTypes.loadAppointments,
  appointments,
});
