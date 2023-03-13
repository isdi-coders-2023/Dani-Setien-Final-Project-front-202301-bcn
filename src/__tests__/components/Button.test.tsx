import { render, screen } from "@testing-library/react";
import { GrClose } from "react-icons/gr";
import Button from "../../components/Button/Button";

describe("Given a Button component", () => {
  describe("When rendered with the given an icon shaped as an 'X' sign", () => {
    test("It should show a button with an icon", () => {
      const buttonIconElement = <GrClose />;
      const buttonLabel = "close";

      const buttonIconClosingTag = "</svg>";

      render(
        <Button
          className=""
          ariaLabel={buttonLabel}
          icon={buttonIconElement}
          disabled={false}
        />
      );

      const button = screen.getByRole("button", {
        name: buttonLabel,
      });

      expect(button).toContainHTML(buttonIconClosingTag);
    });
  });
});
