import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { store } from "./redux/store";
import { theme } from "./theme";

describe("Given an App component", () => {
  describe("When it's rendered and the user clicks at the calendar link", () => {
    test("Then it should navigate to the calendar page", () => {
      const linkText = /calendar/i;
      const path = "/map";
      const expectedPath = "/calendar";

      const history = createMemoryHistory({ initialEntries: [path] });

      render(
        <Router location={history.location} navigator={history}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <App />
            </Provider>
          </ThemeProvider>
        </Router>
      );

      expect(history.location.pathname).toBe(path);

      const link = screen.getByRole("link", { name: linkText });

      userEvent.click(link);

      expect(history.location.pathname).toBe(expectedPath);
    });
  });
});
