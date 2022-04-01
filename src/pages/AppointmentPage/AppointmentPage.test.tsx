import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../redux/store";
import { theme } from "../../theme";
import AppointmentPage from "./AppointmentPage";

describe("Given an AppointmentPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a 'Appointment' heading", () => {
      const headingText = /appointment/i;

      render(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <AppointmentPage />
            </Provider>
          </ThemeProvider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
