import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Header from "./Header";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display links 'USER', 'CALENDAR', 'MAPS' and 'APPOINTMENTS'", () => {
      const logoAcessibleText = /pin your meetings logo/i;

      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      const logo = screen.getByRole("img", { name: logoAcessibleText });

      expect(logo).toBeInTheDocument();
    });
  });
});
