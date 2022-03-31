import { AppointmentsAction } from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import actionsTypes from "./actionsTypes";

export const loadDailyAppointmentsAction = (
  appointments: Appointment[]
): AppointmentsAction => ({
  type: actionsTypes.loadDailyAppointments,
  appointments,
});
