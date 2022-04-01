import { Action, AppointmentAction } from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import actionsTypes from "../actions/actionsTypes";

const appointmentInfoReducer = (
  appointment: Appointment = {
    name: "",
    description: "",
    date: "",
    hour: "",
    category: "",
    location: "",
  },
  action: Action = { type: "" }
) => {
  let newAppointment: Appointment;

  if (action.type === actionsTypes.loadAppointmentInfo) {
    newAppointment = (action as AppointmentAction).appointment;
  } else {
    newAppointment = appointment;
  }

  return newAppointment;
};

export default appointmentInfoReducer;
