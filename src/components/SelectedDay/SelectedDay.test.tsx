import { render, screen } from "@testing-library/react";
import SelectedDay from "./SelectedDay";

describe("Given a SelectedDay component", () => {
  describe("When it's rendered with '2022-03-31' date", () => {
    test("Then it should display a '31-03-2022 appointments' heading", () => {
      const date = "2022-03-31";
      const logoAcessibleText = /31-03-2022 appointments/i;

      render(<SelectedDay date={date} />);

      const logo = screen.getByRole("heading", { name: logoAcessibleText });

      expect(logo).toBeInTheDocument();
    });
  });
});
