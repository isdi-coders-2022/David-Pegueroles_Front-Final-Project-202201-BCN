import { render, screen } from "@testing-library/react";
import SelectedDay from "./SelectedDay";

describe("Given a SelectedDay component", () => {
  describe("When it's rendered with '2022-03-31' date and there's an appointments", () => {
    test("Then it should display a '31-03-2022 appointments' heading", () => {
      const date = "2022-03-31";
      const headingText = /31-03-2022 appointments/i;
      const isThereAnAppointment = true;

      render(
        <SelectedDay date={date} isThereAnAppointment={isThereAnAppointment} />
      );

      const logo = screen.getByRole("heading", { name: headingText });

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it's rendered with '2022-03-31' date and there's no appointments", () => {
    test("Then it should display a '31-03-2022 appointments' heading", () => {
      const date = "2022-03-31";
      const headingText = /there's no appointments for 31-03-2022 yet/i;
      const isThereAnAppointment = false;

      render(
        <SelectedDay date={date} isThereAnAppointment={isThereAnAppointment} />
      );

      const logo = screen.getByRole("heading", { name: headingText });

      expect(logo).toBeInTheDocument();
    });
  });
});
