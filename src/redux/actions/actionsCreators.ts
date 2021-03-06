import {
  AppointmentAction,
  AppointmentsAction,
  DeleteAction,
  NavigationPositionAction,
} from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import actionsTypes from "./actionsTypes";

export const loadDailyAppointmentsAction = (
  appointments: Appointment[]
): AppointmentsAction => ({
  type: actionsTypes.loadDailyAppointments,
  appointments,
});

export const navigationPositionAction = (
  navigationPosition: number
): NavigationPositionAction => ({
  type: actionsTypes.navigationPosition,
  navigationPosition,
});

export const loadAppointmentInfoAction = (
  appointment: Appointment
): AppointmentAction => ({
  type: actionsTypes.loadAppointmentInfo,
  appointment,
});

export const deleteAppointmentAction = (
  id: string | undefined
): DeleteAction => ({
  type: actionsTypes.deleteAppointment,
  id,
});

export const createAppointmentAction = (appointment: Appointment) => ({
  type: actionsTypes.createAppointment,
  appointment,
});
