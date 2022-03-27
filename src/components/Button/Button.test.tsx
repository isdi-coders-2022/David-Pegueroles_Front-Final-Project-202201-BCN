import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered with the text 'This is a button'", () => {
    test("Then it should display a button with the text 'This is a button'", () => {
      const text: string = "This is a button";
      const className: string = "";
      const actionOnclick: () => void = () => {};

      const accessibleText: RegExp = /this is a button/i;

      render(
        <Button
          text={text}
          className={className}
          actionOnClick={actionOnclick}
        />
      );

      const buttonText: HTMLElement = screen.getByRole("button", {
        name: accessibleText,
      });

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an action on click, and the user clicks the button", () => {
    test("Then the action should be called", () => {
      const text: string = "This is a button";
      const className: string = "";
      const actionOnclick: () => void = jest.fn();

      const accessibleText: RegExp = /this is a button/i;

      render(
        <Button
          text={text}
          className={className}
          actionOnClick={actionOnclick}
        />
      );

      const button: HTMLElement = screen.getByRole("button", {
        name: accessibleText,
      });

      userEvent.click(button);

      expect(actionOnclick).toHaveBeenCalled();
    });
  });
});
