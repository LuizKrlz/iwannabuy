import { act, fireEvent, waitFor } from "@testing-library/react-native";

import { ListProductsScreen } from "../../src/screens/ListProductsScreen";
import { createAProduct, renderWithTheme } from "../utils";

import * as hooks from "../../src/integration/products/hooks";
import { useCartStore } from "../../src/store/cart";

jest.mock("@tanstack/react-query", () => {
  return {
    ...jest.requireActual("@tanstack/react-query"),
    useInfiniteQuery: jest.fn(),
  };
});

describe("Screens ListProductsScreen", () => {
  it("should render correctly", () => {
    const product = createAProduct();
    /**
     * @TODO figure out mock
     */
    jest.spyOn(hooks, "useGetProductsInfinityQuery").mockReturnValue({
      data: {
        pageParams: [],
        pages: [[product]],
      },
    } as any);
    const screen = renderWithTheme(<ListProductsScreen />);

    expect(screen.getByTestId("header_list_products_container")).toBeTruthy();

    jest.clearAllMocks();
  });

  it("should be possible to render a list of product", () => {
    const product = createAProduct();

    /**
     * @TODO figure out mock
     */
    jest.spyOn(hooks, "useGetProductsInfinityQuery").mockReturnValue({
      data: {
        pageParams: [],
        pages: [[product]],
      },
    } as any);

    const screen = renderWithTheme(<ListProductsScreen />);

    waitFor(() => {
      expect(screen.getByText(product.title)).toBeTruthy();
    });

    jest.clearAllMocks();
  });

  it("should be possible to add a product", () => {
    const product = createAProduct();

    /**
     * @TODO figure out mock
     */
    jest.spyOn(hooks, "useGetProductsInfinityQuery").mockReturnValue({
      data: {
        pageParams: [],
        pages: [[product]],
      },
    } as any);

    const screen = renderWithTheme(<ListProductsScreen />);

    const button = screen.getByTestId("card_product_button");

    fireEvent.press(button);

    act(() => useCartStore.getState().clearAnimationCart());

    waitFor(() => {
      expect(screen.getByTestId("total_itens_text").props.children).toBe(1);
    });

    jest.clearAllMocks();
  });

  describe("hook", () => {
    it("should be called when press go to cart", () => {
      const product = createAProduct();

      /**
       * @TODO figure out mock
       */
      jest.spyOn(hooks, "useGetProductsInfinityQuery").mockReturnValue({
        data: {
          pageParams: [],
          pages: [[product], [createAProduct()]],
        },
      } as any);

      const mockFn = jest.fn();

      const screen = renderWithTheme(
        <ListProductsScreen navigation={{ navigate: mockFn }} />
      );

      const buttonBasket = screen.getByTestId("button_basket");

      fireEvent.press(buttonBasket);

      expect(mockFn).toHaveBeenCalled();
    });

    it("should be called button to remove a product", () => {
      const product = createAProduct();

      /**
       * @TODO figure out mock
       */
      jest.spyOn(hooks, "useGetProductsInfinityQuery").mockReturnValue({
        data: {
          pageParams: [],
          pages: [[product]],
        },
      } as any);

      const screen = renderWithTheme(<ListProductsScreen />);

      act(() => useCartStore.getState().clearCart());

      const button = screen.getByTestId("card_product_button");

      fireEvent.press(button);

      act(() => useCartStore.getState().clearAnimationCart());

      waitFor(() => {
        expect(screen.getByTestId("total_itens_text").props.children).toBe(1);
      });

      const buttonRemove = screen.getByTestId("card_product_button");

      fireEvent.press(buttonRemove);

      waitFor(() => {
        expect(screen.getByTestId("total_itens_text").props.children).toBe(0);
      });
    });
  });
});
