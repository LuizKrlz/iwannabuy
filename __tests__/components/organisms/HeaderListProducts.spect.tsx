import { HeaderListProducts } from "../../../src/components/organisms/HeaderListProducts";
import palette from "../../../src/styles/palette";
import { renderWithTheme } from "../../utils";

describe("Components organisms/HeaderListProducts", () => {
  it("should render correctly", () => {
    const screen = renderWithTheme(
      <HeaderListProducts isScrolling={false} handleGoToCart={() => {}} />
    );

    expect(screen.getByText("I Wanna Buy")).toBeTruthy();
  });

  it("should white background when is not scrolling", () => {
    const screen = renderWithTheme(
      <HeaderListProducts isScrolling={false} handleGoToCart={() => {}} />
    );

    expect(
      screen.getByTestId("header_list_products_container").props.style[0]
        .backgroundColor
    ).toBe(palette.white);
  });

  it("should grayLight background when is scrolling", () => {
    const screen = renderWithTheme(
      <HeaderListProducts isScrolling handleGoToCart={() => {}} />
    );

    expect(
      screen.getByTestId("header_list_products_container").props.style[0]
        .backgroundColor
    ).toBe(palette.grayLight);
  });
});
