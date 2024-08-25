import { Typography } from "../../../src/components/atoms/Typography";

import { renderWithTheme } from "../../utils";

describe("Componens atoms/Typography", () => {
  it("should render correctly", () => {
    const screen = renderWithTheme(
      <Typography variant="header">I Wanna Buy</Typography>
    );

    const element = screen.getByText("I Wanna Buy");
    expect(element).toBeDefined();
    expect(element.props.style[0].fontSize).toBe(34);
  });
});
