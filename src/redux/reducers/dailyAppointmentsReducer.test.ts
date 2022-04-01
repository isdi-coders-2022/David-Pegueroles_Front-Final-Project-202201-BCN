import { Appointment } from "../../types/Appointment";
import actionsTypes from "../actions/actionsTypes";
import dailyAppointmentsReducer from "./dailyAppointmentsReducer";

describe("Given a dailyAppointmentsReducer function", () => {
  describe("When it receives currentAppointments and an action", () => {
    test("Then it should return the list of appointments", () => {
      const currentAppointments: Appointment[] = [];

      const appointments = [
        {
          name: "Do something",
          description: "This is another thing to do",
          date: "2022-03-31",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          hour: "12:00",
          id: "624212b09666edf108d06d6a",
        },
        {
          name: "Do something else",
          description: "This is another thing to do",
          date: "2022-03-31",
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

      const reducerResult = dailyAppointmentsReducer(
        currentAppointments,
        action
      );

      expect(reducerResult).toEqual(appointments);
    });
  });

  describe("When it receives an id and an action", () => {
    test("Then it should return the id", () => {
      const currentAppointments: Appointment[] = [
        {
          name: "Do something",
          description: "This is another thing to do",
          date: "2022-03-31",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          hour: "12:00",
          id: "624212b09666edf108d06d6a",
        },
        {
          name: "Do something else",
          description: "This is another thing to do",
          date: "2022-03-31",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          hour: "12:00",
          id: "624212b09666edf108d06d6b",
        },
      ];

      const expectedResult = [
        {
          name: "Do something",
          description: "This is another thing to do",
          date: "2022-03-31",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          hour: "12:00",
          id: "624212b09666edf108d06d6a",
        },
      ];

      const action = {
        type: actionsTypes.deleteAppointment,
        id: currentAppointments[1].id,
      };

      const reducerResult = dailyAppointmentsReducer(
        currentAppointments,
        action
      );

      expect(reducerResult).toEqual(expectedResult);
    });
  });

  describe("When it receives currentAppointments and an action with an appointment", () => {
    test("Then it should return a list with the currentAppointments and the appointment", () => {
      const currentAppointments: Appointment[] = [];

      const appointment = {
        name: "Do something",
        description: "This is another thing to do",
        date: "2022-03-31",
        category: "Work",
        location: "C/ Diputació 37, Barcelona",
        hour: "12:00",
        id: "624212b09666edf108d06d6a",
      };

      const expectedAppointment = [
        {
          name: "Do something",
          description: "This is another thing to do",
          date: "2022-03-31",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
          hour: "12:00",
          id: "624212b09666edf108d06d6a",
        },
      ];

      const action = {
        type: actionsTypes.createAppointment,
        appointment,
      };

      const reducerResult = dailyAppointmentsReducer(
        currentAppointments,
        action
      );

      expect(reducerResult).toEqual(expectedAppointment);
    });
  });

  describe("When it doesn't receive any currentAppointments nor action", () => {
    test("Then it should return an empty array", () => {
      const reducerResult = dailyAppointmentsReducer();

      expect(reducerResult).toHaveLength(0);
    });
  });
});
