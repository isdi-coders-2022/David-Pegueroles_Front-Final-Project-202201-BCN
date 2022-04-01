import {
  loadAppointmentInfoAction,
  loadDailyAppointmentsAction,
  navigationPositionAction,
} from "./actionsCreators";

describe("Given a loadDailyAppointmentsAction function", () => {
  describe("When it receives a list of appointments", () => {
    test("Then it should return an action with type 'load-appointments' and the list of appointments", () => {
      const appointments = [
        {
          name: "Do something",
          description: "This should do",
          date: "2022-03-29",
          hour: "10:00",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
        },
      ];
      const expectedAction = {
        type: "load-daily-appointments",
        appointments,
      };

      const action = loadDailyAppointmentsAction(appointments);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a navigationPositionAction function", () => {
  describe("When it receives a navigation position", () => {
    test("Then it should return an action with type 'navigation-position' and the navigation position", () => {
      const navigationPosition = 1;
      const expectedAction = {
        type: "navigation-position",
        navigationPosition,
      };

      const action = navigationPositionAction(navigationPosition);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loadAppointmentInfoAction function", () => {
  describe("When it receives a navigation position", () => {
    test("Then it should return an action with type 'navigation-position' and the navigation position", () => {
      const appointment = {
        name: "Do something",
        description: "This should do",
        date: "2022-03-29",
        hour: "10:00",
        category: "Work",
        location: "C/ Diputació 37, Barcelona",
      };

      const expectedAction = {
        type: "load-appointment-information",
        appointment,
      };

      const action = loadAppointmentInfoAction(appointment);
      expect(action).toEqual(expectedAction);
    });
  });
});
