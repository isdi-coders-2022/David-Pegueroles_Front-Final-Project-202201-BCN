import getCalendarDays from "./getCalendarDays";

describe("Given a getCalendarDays function", () => {
  describe("When it's invoked with the month '2' and the year '2022'", () => {
    test("Then it should return the days from '2022-02-'28 to '2022-04-03'", () => {
      const monthNumber: number = 2;
      const yearNumber: number = 2022;
      const expectedCalendarDays = [
        [
          "28-02-2022",
          "1-03-2022",
          "2-03-2022",
          "3-03-2022",
          "4-03-2022",
          "5-03-2022",
          "6-03-2022",
        ],
        [
          "7-03-2022",
          "8-03-2022",
          "9-03-2022",
          "10-03-2022",
          "11-03-2022",
          "12-03-2022",
          "13-03-2022",
        ],
        [
          "14-03-2022",
          "15-03-2022",
          "16-03-2022",
          "17-03-2022",
          "18-03-2022",
          "19-03-2022",
          "20-03-2022",
        ],
        [
          "21-03-2022",
          "22-03-2022",
          "23-03-2022",
          "24-03-2022",
          "25-03-2022",
          "26-03-2022",
          "27-03-2022",
        ],
        [
          "28-03-2022",
          "29-03-2022",
          "30-03-2022",
          "31-03-2022",
          "1-04-2022",
          "2-04-2022",
          "3-04-2022",
        ],
      ];

      const calendarDays: string[][] = getCalendarDays(monthNumber, yearNumber);

      expect(calendarDays).toEqual(expectedCalendarDays);
    });
  });
});
