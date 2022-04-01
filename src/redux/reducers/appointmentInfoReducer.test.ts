import { Appointment } from "../../types/Appointment";
import actionsTypes from "../actions/actionsTypes";
import appointmentInfoReducer from "./appointmentInfoReducer";

describe("Given a appointmentInfoReducer function", () => {
  describe("When it receives a currentAppointment and an action with an appointment", () => {
    test("Then it should return the appointment", () => {
      const currentAppointment: Appointment = {
        name: "",
        description: "",
        date: "",
        hour: "",
        category: "",
        location: "",
      };

      const appointment = {
        name: "Do something",
        description: "This should do",
        date: "2022-03-29T16:00:00.000Z",
        category: "Work",
        location: "C/ Diputació 37, Barcelona",
        id: "624210049666edf108d06d69",
      };
      const action = {
        type: actionsTypes.loadAppointmentInfo,
        appointment,
      };

      const reducerResult = appointmentInfoReducer(currentAppointment, action);

      expect(reducerResult).toEqual(appointment);
    });
  });

  describe("When it doesn't receive any currentAppointment nor action", () => {
    test("Then it should return an empty array", () => {
      const expectedResult = {
        name: "",
        description: "",
        date: "",
        hour: "",
        category: "",
        location: "",
      };
      const reducerResult = appointmentInfoReducer();

      expect(reducerResult).toEqual(expectedResult);
    });
  });
});
