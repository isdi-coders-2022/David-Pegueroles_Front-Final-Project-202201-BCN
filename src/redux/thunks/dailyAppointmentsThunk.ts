import { ThunkDispatch } from "redux-thunk";
import { AppointmentsAction } from "../../types/ActionTypes";
import { Appointment } from "../../types/Appointment";
import changeDateFormat from "../../utils/changeDateFormat/changeDateFormat";
import { loadDailyAppointmentsAction } from "../actions/actionsCreators";
import { RootState } from "../store";

interface AppointmentList {
  appointments: Appointment[];
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
