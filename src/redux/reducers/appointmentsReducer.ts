import { Action, AppointmentsAction } from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import actionsTypes from "../actions/actionsTypes";

const appointmentsReducer = (
  appointments: Appointment[] = [],
  action: Action = { type: "" }
) => {
  let newAppointments: Appointment[];

  switch (action.type) {
    case actionsTypes.loadAppointments:
      newAppointments = [...(action as AppointmentsAction).appointments];
      break;

    default:
      newAppointments = [...appointments];
  }

  return newAppointments;
};

export default appointmentsReducer;
