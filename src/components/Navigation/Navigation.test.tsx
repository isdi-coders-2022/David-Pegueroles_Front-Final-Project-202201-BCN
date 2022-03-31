import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../redux/store";
import { theme } from "../../theme";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display links 'USER', 'CALENDAR', 'MAPS' and 'APPOINTMENTS'", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Navigation />
            </Provider>
          </ThemeProvider>
        </BrowserRouter>
      );

      const user = screen.getByRole("link", { name: /user/i });
      const calendar = screen.getByRole("link", { name: /calendar/i });
      const map = screen.getByRole("link", { name: /map/i });
      const appointment = screen.getByRole("link", { name: /appointment/i });

      expect(user).toBeInTheDocument();
      expect(calendar).toBeInTheDocument();
      expect(map).toBeInTheDocument();
      expect(appointment).toBeInTheDocument();
    });
  });
});
