import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Calendar from "./Calendar";

describe("Given a Calendar component", () => {
  const days: string[][] = [
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
  const setDays: React.Dispatch<React.SetStateAction<string[][]>> = jest.fn();
  const setDisplayingMonth: React.Dispatch<React.SetStateAction<string>> =
    jest.fn();
  const nextMonthOnclick: () => void = jest.fn();
  const previousMonthOnclick: () => void = jest.fn();
  const changeSelectedDate: () => void = jest.fn();

  describe("When it's rendered with all the required props, the currentMonth is 0 & the displayingMonth is '03-2022'", () => {
    const currentMonth: number = 0;
    const displayingMonth: string = "03-2022";

    test("Then it should display a heading with the text '03-2022'", () => {
      const accessibleText: RegExp = /03-2022/i;

      render(
        <ThemeProvider theme={theme}>
          <Calendar
            days={days}
            setDays={setDays}
            currentMonth={currentMonth}
            displayingMonth={displayingMonth}
            setDisplayingMonth={setDisplayingMonth}
            nextMonthOnclick={nextMonthOnclick}
            previousMonthOnclick={previousMonthOnclick}
            dayOnClick={changeSelectedDate}
          />
        </ThemeProvider>
      );

      const heading: HTMLElement = screen.getByRole("heading", {
        name: accessibleText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should display a list of days from 1 to 31 with some days repeated", () => {
      const daysText: number[] = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ];

      render(
        <ThemeProvider theme={theme}>
          <Calendar
            days={days}
            setDays={setDays}
            currentMonth={currentMonth}
            displayingMonth={displayingMonth}
            setDisplayingMonth={setDisplayingMonth}
            nextMonthOnclick={nextMonthOnclick}
            previousMonthOnclick={previousMonthOnclick}
            dayOnClick={changeSelectedDate}
          />
        </ThemeProvider>
      );

      daysText.forEach((dayText: number) => {
        const daysInScreen: HTMLElement[] = screen.getAllByRole("listitem", {
          name: dayText.toString(),
        });

        daysInScreen.forEach((dayInScreen: HTMLElement) => {
          expect(dayInScreen).toBeInTheDocument();
        });
      });
    });
  });

  describe("When it's rendered with all the required props, the currentMonth is -1 & the displayingMonth is '02-2022'", () => {
    test("Then it should display a list of abreviated week days from Monday to Sunday", () => {
      const currentMonth: number = -1;
      const displayingMonth: string = "02-2022";

      const listOfWeekDays: string[] = [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN",
      ];

      render(
        <ThemeProvider theme={theme}>
          <Calendar
            days={days}
            setDays={setDays}
            currentMonth={currentMonth}
            displayingMonth={displayingMonth}
            setDisplayingMonth={setDisplayingMonth}
            nextMonthOnclick={nextMonthOnclick}
            previousMonthOnclick={previousMonthOnclick}
            dayOnClick={changeSelectedDate}
          />
        </ThemeProvider>
      );

      listOfWeekDays.forEach((weekDay) => {
        const dayName: HTMLElement = screen.getByRole("listitem", {
          name: weekDay,
        });

        expect(dayName).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with all the props and the user clicks at the day 15", () => {
    test("Then it should call the changeSelectedDate function", () => {
      const currentMonth: number = 0;
      const displayingMonth: string = "03-2022";

      const dayNumber = /15/i;

      render(
        <ThemeProvider theme={theme}>
          <Calendar
            days={days}
            setDays={setDays}
            currentMonth={currentMonth}
            displayingMonth={displayingMonth}
            setDisplayingMonth={setDisplayingMonth}
            nextMonthOnclick={nextMonthOnclick}
            previousMonthOnclick={previousMonthOnclick}
            dayOnClick={changeSelectedDate}
          />
        </ThemeProvider>
      );

      const day: HTMLElement = screen.getByRole("listitem", {
        name: dayNumber,
      });

      userEvent.click(day);

      expect(changeSelectedDate).toHaveBeenCalled();
    });
  });
});
