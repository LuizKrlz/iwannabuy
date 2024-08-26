import { Header } from "../../../src/components/organisms/Header";
import palette from "../../../src/styles/palette";
import { renderWithTheme } from "../../utils";

describe("Components organisms/Header", () => {
  it("should render correctly", () => {
    const screen = renderWithTheme(
      <Header isScrolling={false} handleGoToCart={() => {}} />
    );

    expect(screen.getByText("I Wanna Buy")).toBeTruthy();
  });

  it("should white background when is not scrolling", () => {
    const screen = renderWithTheme(
      <Header isScrolling={false} handleGoToCart={() => {}} />
    );

    expect(
      screen.getByTestId("header_container").props.style[0].backgroundColor
    ).toBe(palette.white);
  });

  it("should grayLight background when is scrolling", () => {
    const screen = renderWithTheme(
      <Header isScrolling handleGoToCart={() => {}} />
    );

    expect(
      screen.getByTestId("header_container").props.style[0].backgroundColor
    ).toBe(palette.grayLight);
  });
});
