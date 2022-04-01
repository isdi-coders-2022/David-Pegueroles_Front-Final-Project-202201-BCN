import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import AppointmentDisplay from "./AppointmentDisplay";

describe("Given an AppointmentDisplay component", () => {
  describe("When it's rendered with an appointment", () => {
    test("Then it should display a heading with the appointment name", () => {
      const appointmentName = /do something/i;

      const appointmentInfo = {
        name: "Do something",
        description: "This should do",
        date: "2022-03-29",
        category: "Work",
        location: "C/ Diputació 37, Barcelona",
        hour: "10:00",
        id: "624210049666edf108d06d69",
      };

      render(
        <ThemeProvider theme={theme}>
          <AppointmentDisplay appointment={appointmentInfo} />
        </ThemeProvider>
      );
      const heading = screen.getByRole("heading", { name: appointmentName });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should display list items with the appointment date, hour, description & location", () => {
      const date = /2022-03-29/i;
      const hour = /10:00/i;
      const description = /this should do/i;

      const appointmentInfo = {
        name: "Do something",
        description: "This should do",
        date: "2022-03-29",
        category: "Work",
        location: "C/ Diputació 37, Barcelona",
        hour: "10:00",
        id: "624210049666edf108d06d69",
      };

      render(
        <ThemeProvider theme={theme}>
          <AppointmentDisplay appointment={appointmentInfo} />
        </ThemeProvider>
      );

      const receivedDate = screen.getByRole("listitem", { name: date });
      const receivedHour = screen.getByRole("listitem", { name: hour });
      const receivedDescription = screen.getByRole("listitem", {
        name: description,
      });

      expect(receivedDate).toBeInTheDocument();
      expect(receivedHour).toBeInTheDocument();
      expect(receivedDescription).toBeInTheDocument();
    });
  });
});
