import actionsTypes from "../actions/actionsTypes";
import navigationPositionReducer from "./navigationPositionReducer";

describe("Given a dailyAppointmentsReducer function", () => {
  describe("When it receives current navigation position and an action with a navigation position", () => {
    test("Then it should return the navigation position", () => {
      const currentNavigationPosition: number = 0;

      const navigationPosition = 1;

      const action = {
        type: actionsTypes.navigationPosition,
        navigationPosition,
      };

      const reducerResult = navigationPositionReducer(
        currentNavigationPosition,
        action
      );

      expect(reducerResult).toEqual(navigationPosition);
    });
  });

  describe("When it doesn't receive any navigationPosition nor action", () => {
    test("Then it should return 0", () => {
      const expectedResult = 0;

      const reducerResult = navigationPositionReducer();

      expect(reducerResult).toBe(expectedResult);
    });
  });
});
