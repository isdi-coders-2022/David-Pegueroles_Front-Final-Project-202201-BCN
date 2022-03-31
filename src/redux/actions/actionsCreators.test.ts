import { loadDailyAppointmentsAction } from "./actionsCreators";

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
        type: "load-appointments",
        appointments,
      };

      const action = loadDailyAppointmentsAction(appointments);
      expect(action).toEqual(expectedAction);
    });
  });
});
