import { ThunkDispatch } from "redux-thunk";
import {
  AppointmentAction,
  AppointmentsAction,
  CreateAppointmentAction,
  DeleteAction,
} from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import changeDateFormat from "../../utils/changeDateFormat/changeDateFormat";
import {
  createAppointmentAction,
  deleteAppointmentAction,
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

export const deleteAppointmentThunk =
  (id: string | undefined) =>
  async (
    dispatch: ThunkDispatch<RootState, void, DeleteAction>
  ): Promise<void> => {
    const response = await fetch(
      `${process.env.REACT_APP_API}calendar/appointment/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch(deleteAppointmentAction(id));
    }
  };

export const CreateAppointmentThunk =
  (appointment: Appointment) =>
  async (dispatch: ThunkDispatch<void, unknown, CreateAppointmentAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API}calendar/appointment/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      }
    );

    const { newAppointment } = await response.json();

    dispatch(createAppointmentAction(newAppointment));
  };
