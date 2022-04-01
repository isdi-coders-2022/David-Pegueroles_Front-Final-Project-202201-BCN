import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import FormPage from "./FormPage";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

describe("Given a CalendarPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a list of abreviated week days from Monday to Sunday", () => {
      const nameText = /name/i;

      render(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <FormPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      const nameLabel = screen.getByLabelText(nameText);

      expect(nameLabel).toBeInTheDocument();
    });
  });
});
