import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import CalendarPage from "./CalendarPage";

describe("Given a CalendarPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a list of abreviated week days from Monday to Sunday", () => {
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
          <CalendarPage />
        </ThemeProvider>
      );

      listOfWeekDays.forEach((weekDay) => {
        const dayName: HTMLElement = screen.getByRole("listitem", {
          name: weekDay,
        });

        expect(dayName).toBeInTheDocument();
      });
    });

    test("Then it should display a button that when clicked it should change the heading 'March 2022' to 'February 2022'", () => {
      const buttonAltText = /previous month button/i;
      const headingText = /march 2022/i;

      render(
        <ThemeProvider theme={theme}>
          <CalendarPage />
        </ThemeProvider>
      );

      const previousMonthButton = screen.getByRole("button", {
        name: buttonAltText,
      });

      const calendarHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(calendarHeading).toBeInTheDocument();

      userEvent.click(previousMonthButton);

      const updatedHeadingText = /february 2022/i;

      const updatedCalendarHeading = screen.getByRole("heading", {
        name: updatedHeadingText,
      });

      expect(updatedCalendarHeading).toBeInTheDocument();
      expect(calendarHeading).not.toContain(headingText);
      expect(calendarHeading).toBe(updatedCalendarHeading);
    });

    test("Then it should display a button that when clicked it should change the heading 'March 2022' to 'April 2022'", () => {
      const buttonAltText = /next month button/i;
      const headingText = /march 2022/i;

      render(
        <ThemeProvider theme={theme}>
          <CalendarPage />
        </ThemeProvider>
      );

      const nextMonthButton = screen.getByRole("button", {
        name: buttonAltText,
      });

      const calendarHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(calendarHeading).toBeInTheDocument();

      userEvent.click(nextMonthButton);

      const updatedHeadingText = /april 2022/i;

      const updatedCalendarHeading = screen.getByRole("heading", {
        name: updatedHeadingText,
      });

      expect(updatedCalendarHeading).toBeInTheDocument();
      expect(calendarHeading).not.toContain(headingText);
      expect(calendarHeading).toBe(updatedCalendarHeading);
    });
  });
});
