import { Appointment } from "../../types/Appointment";
import actionsTypes from "../actions/actionsTypes";
import appointmentsReducer from "./appointmentsReducer";

describe("Given an appointmentsReducer function", () => {
  describe("When it receives currentAppointments and a list of appointments", () => {
    test("Then it should return the list of appointments", () => {
      const currentAppointments: Appointment[] = [];

      const appointments = [
        {
          name: "Do something",
          description: "This should do",
          date: "2022-03-29T16:00:00.000Z",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          id: "624210049666edf108d06d69",
        },
        {
          name: "Do something else",
          description: "This is another thing to do",
          date: "2022-03-30T16:00:00.000Z",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          id: "624212b09666edf108d06d6a",
        },
      ];

      const action = {
        type: actionsTypes.loadAppointments,
        appointments,
      };

      const reducerResult = appointmentsReducer(currentAppointments, action);

      expect(reducerResult).toEqual(appointments);
    });
  });

  describe("When it doesn't receive any currentAppointments nor action", () => {
    test("Then it should return an empty array", () => {
      const reducerResult = appointmentsReducer();

      expect(reducerResult).toHaveLength(0);
    });
  });
});