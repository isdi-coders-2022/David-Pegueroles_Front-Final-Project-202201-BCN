import getCalendarDays from "./getCalendarDays";

describe("Given a getCalendarDays function", () => {
  describe("When it's invoked with the month '2' and the year '2022'", () => {
    test("Then it should return the days from '2022-02-'28 to '2022-04-03'", () => {
      const monthNumber: number = 2;
      const yearNumber: number = 2022;
      const expectedCalendarDays = [
        [
          "2022-02-28",
          "2022-03-1",
          "2022-03-2",
          "2022-03-3",
          "2022-03-4",
          "2022-03-5",
          "2022-03-6",
        ],
        [
          "2022-03-7",
          "2022-03-8",
          "2022-03-9",
          "2022-03-10",
          "2022-03-11",
          "2022-03-12",
          "2022-03-13",
        ],
        [
          "2022-03-14",
          "2022-03-15",
          "2022-03-16",
          "2022-03-17",
          "2022-03-18",
          "2022-03-19",
          "2022-03-20",
        ],
        [
          "2022-03-21",
          "2022-03-22",
          "2022-03-23",
          "2022-03-24",
          "2022-03-25",
          "2022-03-26",
          "2022-03-27",
        ],
        [
          "2022-03-28",
          "2022-03-29",
          "2022-03-30",
          "2022-03-31",
          "2022-04-1",
          "2022-04-2",
          "2022-04-3",
        ],
      ];

      const calendarDays: string[][] = getCalendarDays(monthNumber, yearNumber);

      expect(calendarDays).toEqual(expectedCalendarDays);
    });
  });
});
