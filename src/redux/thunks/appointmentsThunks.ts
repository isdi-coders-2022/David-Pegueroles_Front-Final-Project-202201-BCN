import { ThunkDispatch } from "redux-thunk";
import { AppointmentAction, AppointmentsAction } from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import changeDateFormat from "../../utils/changeDateFormat/changeDateFormat";
import {
  loadAppointmentInfoAction,
  loadDailyAppointmentsAction,
} from "../actions/actionsCreators";
import { RootState } from "../store";

interface AppointmentList {
  appointments: Appointment[];
}

interface AppointmentInfo {
  appointment: Appointment;
}

export const loadDailyAppointmentsThunk =
  (date: string) =>
  async (
    dispatch: ThunkDispatch<RootState, void, AppointmentsAction>
  ): Promise<void> => {
    const response = await fetch(
      `${process.env.REACT_APP_API}calendar/${changeDateFormat(date, true)}`
    );
    const { appointments }: AppointmentList = await response.json();

    dispatch(loadDailyAppointmentsAction(appointments));
  };

export const loadAppointmentInfoThunk =
  (id: string | undefined) =>
  async (
    dispatch: ThunkDispatch<RootState, void, AppointmentAction>
  ): Promise<void> => {
    const response = await fetch(
      `${process.env.REACT_APP_API}calendar/appointment/${id}`
    );
    const { appointment }: AppointmentInfo = await response.json();

    dispatch(loadAppointmentInfoAction(appointment));
  };
