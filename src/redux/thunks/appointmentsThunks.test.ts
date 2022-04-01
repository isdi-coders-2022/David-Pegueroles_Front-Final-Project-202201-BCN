import { Appointment } from "../../types/Appointment";
import actionsTypes from "../actions/actionsTypes";
import {
  loadAppointmentInfoThunk,
  loadDailyAppointmentsThunk,
} from "./appointmentsThunks";

describe("Given a loadDailyAppointmentsThunk function", () => {
  describe("When it's invoked with '29-03-2022'", () => {
    test("Then it should call the dispatch function", async () => {
      const date = "29-03-2022";

      const appointments: Appointment[] = [
        {
          name: "Do something",
          description: "This should do",
          date: "2022-03-29",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          hour: "10:00",
          id: "624210049666edf108d06d69",
        },
        {
          name: "Do something else",
          description: "This is another thing to do",
          date: "2022-03-29",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          hour: "12:00",
          id: "624212b09666edf108d06d6a",
        },
      ];
      const action = {
        type: actionsTypes.loadDailyAppointments,
        appointments,
      };

      const dispatch = jest.fn();
      const dailyAppointmentsThunk = loadDailyAppointmentsThunk(date);

      await dailyAppointmentsThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a loadAppointmentInfoThunk function", () => {
  describe("When it's invoked with the id '624210049666edf108d06d69'", () => {
    test("Then it should call the dispatch function", async () => {
      const id = "624210049666edf108d06d69";

      const appointment: Appointment = {
        name: "Do something",
        description: "This should do",
        date: "2022-03-29",
        category: "Work",
        location: "C/ Diputació 37, Barcelona",
        hour: "10:00",
        id: "624210049666edf108d06d69",
      };
      const action = {
        type: actionsTypes.loadAppointmentInfo,
        appointment,
      };

      const dispatch = jest.fn();
      const dailyAppointmentsThunk = loadAppointmentInfoThunk(id);

      await dailyAppointmentsThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
