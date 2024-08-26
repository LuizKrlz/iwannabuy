import { act, fireEvent, waitFor } from "@testing-library/react-native";
import { CartScreen } from "../../src/screens/CartScreen";
import { useCartStore } from "../../src/store/cart";
import { createAProduct, getMockNavigation, renderWithTheme } from "../utils";

const mockNavigation = getMockNavigation();

describe("Screens CartScreen", () => {
  afterEach(() => {
    act(() => useCartStore.getState().clearCart());
  });

  it("should render correctly", () => {
    const screen = renderWithTheme(<CartScreen navigation={mockNavigation} />);

    expect(screen).toBeTruthy();
  });

  it("should be render a list of products", () => {
    const screen = renderWithTheme(<CartScreen navigation={mockNavigation} />);
    const product = createAProduct();

    act(() => useCartStore.getState().addItem(product));

    waitFor(() => {
      expect(screen.getByText(product.title)).toBeTruthy();
    });
  });

  it("should be call function to delete a item", () => {
    const screen = renderWithTheme(<CartScreen navigation={mockNavigation} />);
    const product = createAProduct();

    act(() => useCartStore.getState().addItem(product));

    waitFor(() => {
      expect(screen.getByText(product.title)).toBeTruthy();
    });

    const buttonRemove = screen.getByTestId("product_list_item_delete");

    fireEvent.press(buttonRemove);

    waitFor(() => {
      const element = screen.queryByTestId("product_list_item_delete");
      expect(element).toBeNull();
      expect(useCartStore.getState().cart).toHaveLength(0);
    });
  });

  it("should be call function go back", () => {
    const mock = jest.fn();

    const screen = renderWithTheme(
      <CartScreen
        navigation={{
          ...mockNavigation,
          goBack: mock,
        }}
      />
    );

    const buttonBack = screen.getByTestId("header_back");

    act(() => fireEvent.press(buttonBack));

    waitFor(() => {
      expect(mock).toHaveBeenCalled();
    });
  });
});
