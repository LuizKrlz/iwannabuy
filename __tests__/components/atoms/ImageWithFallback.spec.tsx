import { faker } from "@faker-js/faker";
import { ImageWithFallback } from "../../../src/components/atoms/ImageWithFallback";
import { renderWithTheme } from "../../utils";

describe("Components atoms/ImageWithFallback", () => {
  it("should render correctly", () => {
    const screen = renderWithTheme(
      <ImageWithFallback uri={faker.image.url()} testId="product" />
    );

    expect(screen.getByTestId("product")).toBeTruthy();
  });
});
