import {
  Action,
  AppointmentsAction,
  CreateAppointmentAction,
  DeleteAction,
} from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import actionsTypes from "../actions/actionsTypes";

const dailyAppointmentsReducer = (
  appointments: Appointment[] = [],
  action: Action = { type: "" }
) => {
  let newAppointments: Appointment[];

  switch (action.type) {
    case actionsTypes.loadDailyAppointments:
      newAppointments = [...(action as AppointmentsAction).appointments];
      break;

    case actionsTypes.deleteAppointment:
      newAppointments = appointments.filter(
        (appointment) => appointment.id !== (action as DeleteAction).id
      );
      break;

    case actionsTypes.createAppointment:
      newAppointments = [
        ...appointments,
        (action as CreateAppointmentAction).appointment,
      ];
      break;
    default:
      newAppointments = [...appointments];
  }

  return newAppointments;
};

export default dailyAppointmentsReducer;
