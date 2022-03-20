import getCalendarDays from "./getCalendarDays";

describe("Given a getCalendarDays function", () => {
  describe("When it's invoked with the month '2' and the year '2022'", () => {
    test("Then it should return the days from '2022-02-'28 to '2022-04-03'", () => {
      const monthNumber: number = 2;
      const yearNumber: number = 2022;
      const expectedCalendarDays = [
        [
          "2022-02-28T23:00:00.000Z",
          "2022-03-01T23:00:00.000Z",
          "2022-03-02T23:00:00.000Z",
          "2022-03-03T23:00:00.000Z",
          "2022-03-04T23:00:00.000Z",
          "2022-03-05T23:00:00.000Z",
          "2022-03-06T23:00:00.000Z",
        ],
        [
          "2022-03-07T23:00:00.000Z",
          "2022-03-08T23:00:00.000Z",
          "2022-03-09T23:00:00.000Z",
          "2022-03-10T23:00:00.000Z",
          "2022-03-11T23:00:00.000Z",
          "2022-03-12T23:00:00.000Z",
          "2022-03-13T23:00:00.000Z",
        ],
        [
          "2022-03-14T23:00:00.000Z",
          "2022-03-15T23:00:00.000Z",
          "2022-03-16T23:00:00.000Z",
          "2022-03-17T23:00:00.000Z",
          "2022-03-18T23:00:00.000Z",
          "2022-03-19T23:00:00.000Z",
          "2022-03-20T23:00:00.000Z",
        ],
        [
          "2022-03-21T23:00:00.000Z",
          "2022-03-22T23:00:00.000Z",
          "2022-03-23T23:00:00.000Z",
          "2022-03-24T23:00:00.000Z",
          "2022-03-25T23:00:00.000Z",
          "2022-03-26T23:00:00.000Z",
          "2022-03-27T22:00:00.000Z",
        ],
        [
          "2022-03-28T22:00:00.000Z",
          "2022-03-29T22:00:00.000Z",
          "2022-03-30T22:00:00.000Z",
          "2022-03-31T22:00:00.000Z",
          "2022-04-01T22:00:00.000Z",
          "2022-04-02T22:00:00.000Z",
          "2022-04-03T22:00:00.000Z",
        ],
      ];

      const calendarDays: string[][] = getCalendarDays(monthNumber, yearNumber);

      expect(calendarDays).toEqual(expectedCalendarDays);
    });
  });
});
