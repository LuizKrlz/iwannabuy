import { fireEvent } from "@testing-library/react-native";
import { CardProduct } from "../../../src/components/organisms/CardProduct";
import { createAProduct, renderWithTheme } from "../../utils";

const product = createAProduct();

describe("Componens molecules/CardProduct", () => {
  it("should render correctly", () => {
    const screen = renderWithTheme(
      <CardProduct
        product={product}
        handlePressButton={jest.fn}
        alreadyAdded={false}
      />
    );

    expect(screen.getByText(product.title)).toBeTruthy();
  });

  it("should render correctly when alreadyAdded is false", () => {
    const screen = renderWithTheme(
      <CardProduct product={product} handlePressButton={jest.fn} />
    );

    expect(screen.getByText("Add")).toBeTruthy();
  });

  it("should render correctly when alreadyAdded is true", () => {
    const screen = renderWithTheme(
      <CardProduct
        product={product}
        handlePressButton={jest.fn}
        alreadyAdded={true}
      />
    );

    expect(screen.getByText("Remove")).toBeTruthy();
  });

  it("should call a function when press button", () => {
    const mockHandlePressButton = jest.fn();
    const screen = renderWithTheme(
      <CardProduct
        product={product}
        handlePressButton={mockHandlePressButton}
        alreadyAdded={true}
      />
    );

    const button = screen.getByTestId("card_product_button");

    fireEvent.press(button);

    expect(mockHandlePressButton).toHaveBeenCalled();
  });

  it("shouldn't call a function when press button and isDisabled", () => {
    const mockHandlePressButton = jest.fn();
    const screen = renderWithTheme(
      <CardProduct
        product={product}
        handlePressButton={mockHandlePressButton}
        alreadyAdded={true}
        isDisabled
      />
    );

    const button = screen.getByTestId("card_product_button");

    fireEvent.press(button);

    expect(mockHandlePressButton).not.toHaveBeenCalled();
  });
});
