import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should display an image with the 'Pin Your Meetings Logo'", () => {
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
