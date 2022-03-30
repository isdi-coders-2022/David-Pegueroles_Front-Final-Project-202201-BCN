import { loadAppointmentsAction } from "./actionsCreators";

describe("Given a loadAppointmentsAction function", () => {
  describe("When it receives a list of appointments", () => {
    test("Then it should return an action with type 'load-appointments' and the list of appointments", () => {
      const appointments = [
        {
          name: "Do something",
          description: "This should do",
          date: "2022-03-29T16:00:00.000Z",
          category: "Work",
          location: "C/ Diputació 37, Barcelona",
        },
      ];
      const expectedAction = {
        type: "load-appointments",
        appointments,
      };

      const action = loadAppointmentsAction(appointments);
      expect(action).toEqual(expectedAction);
    });
  });
});
