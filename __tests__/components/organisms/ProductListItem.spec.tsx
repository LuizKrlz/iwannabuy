import { fireEvent } from "@testing-library/react-native";
import { ProductListItem } from "../../../src/components/organisms/ProductListItem";
import { createAProduct, renderWithTheme } from "../../utils";

describe("Components organisms/ProductListItem", () => {
  it("should render correctly", () => {
    const product = createAProduct();

    const screen = renderWithTheme(
      <ProductListItem {...product} onDelete={jest.fn()} />
    );

    expect(screen.getByText(product.title)).toBeTruthy();
  });

  it("should be call funtion when press delete", () => {
    const product = createAProduct();

    const mockFn = jest.fn();
    const screen = renderWithTheme(
      <ProductListItem {...product} onDelete={mockFn} />
    );

    const element = screen.getByTestId("product_list_item_delete");

    fireEvent.press(element);

    expect(mockFn).toHaveBeenCalled();
  });
});
