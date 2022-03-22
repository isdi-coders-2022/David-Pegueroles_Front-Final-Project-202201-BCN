import getCalendarDays from "./getCalendarDays";

describe("Given a getCalendarDays function", () => {
  describe("When it's invoked with the month '2' and the year '2022'", () => {
    test("Then it should return the days from '2022-02-'28 to '2022-04-03'", () => {
      const monthNumber: number = 2;
      const yearNumber: number = 2022;
      const expectedCalendarDays = [
        [
          "28th-02-2022",
          "1st-03-2022",
          "2nd-03-2022",
          "3rd-03-2022",
          "4th-03-2022",
          "5th-03-2022",
          "6th-03-2022",
        ],
        [
          "7th-03-2022",
          "8th-03-2022",
          "9th-03-2022",
          "10th-03-2022",
          "11th-03-2022",
          "12th-03-2022",
          "13th-03-2022",
        ],
        [
          "14th-03-2022",
          "15th-03-2022",
          "16th-03-2022",
          "17th-03-2022",
          "18th-03-2022",
          "19th-03-2022",
          "20th-03-2022",
        ],
        [
          "21st-03-2022",
          "22nd-03-2022",
          "23rd-03-2022",
          "24th-03-2022",
          "25th-03-2022",
          "26th-03-2022",
          "27th-03-2022",
        ],
        [
          "28th-03-2022",
          "29th-03-2022",
          "30th-03-2022",
          "31st-03-2022",
          "1st-04-2022",
          "2nd-04-2022",
          "3rd-04-2022",
        ],
      ];

      const calendarDays: string[][] = getCalendarDays(monthNumber, yearNumber);

      expect(calendarDays).toEqual(expectedCalendarDays);
    });
  });
});
