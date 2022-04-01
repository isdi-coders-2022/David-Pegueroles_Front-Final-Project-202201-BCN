import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import AppointmentBanner from "./AppointmentBanner";

describe("Given an AppointmentBanner component", () => {
  describe("When it's rendered with an appointment and actionOnClick", () => {
    test("Then it should display the name & hour of the appointment, and an edit image", () => {
      const name = /do something/i;
      const hour = /12:00/i;
      const edit = /edit/i;
      const actionOnClick = jest.fn();

      const appointment = {
        name: "Do something",
        description: "This is another thing to do",
        date: "2022-03-31",
        category: "Work",
        location: "C/ Diputació 37, Barcelona",
        hour: "12:00",
        id: "624212b09666edf108d06d6a",
      };

      render(
        <ThemeProvider theme={theme}>
          <AppointmentBanner
            appointment={appointment}
            actionOnClick={() => actionOnClick()}
          />
        </ThemeProvider>
      );

      const nameListItem = screen.getByRole("listitem", { name: name });
      const hourListItem = screen.getByRole("listitem", { name: hour });
      const editImage = screen.getByRole("img", { name: edit });

      expect(nameListItem).toBeInTheDocument();
      expect(hourListItem).toBeInTheDocument();
      expect(editImage).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an appointment & actionOnClick and the user clicks at the appointment", () => {
    test("Then it should call the actionOnClick", () => {
      const name = /do something/i;
      const actionOnClick = jest.fn();

      const appointment = {
        name: "Do something",
        description: "This is another thing to do",
        date: "2022-03-31",
        category: "Work",
        location: "C/ Diputació 37, Barcelona",
        hour: "12:00",
        id: "624212b09666edf108d06d6a",
      };

      render(
        <ThemeProvider theme={theme}>
          <AppointmentBanner
            appointment={appointment}
            actionOnClick={() => actionOnClick()}
          />
        </ThemeProvider>
      );

      const nameListItem = screen.getByRole("listitem", { name: name });

      userEvent.click(nameListItem);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
