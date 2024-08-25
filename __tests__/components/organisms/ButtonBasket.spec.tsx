import { act } from "@testing-library/react-native";
import { ButtonBasket } from "../../../src/components/organisms/ButtonBasket";
import { useCartStore } from "../../../src/store/cart";
import { createAProduct, renderWithTheme } from "../../utils";

export function sleep(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// jest.mock("lottie-react-native");

jest.setTimeout(10000);

describe("Components organisms/ButtonBasket", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should render correctly", () => {
    const screen = renderWithTheme(<ButtonBasket onPress={() => {}} />);

    expect(screen.getByTestId("button_basket")).toBeTruthy();
    expect(screen.getByTestId("lottie_view")).toBeTruthy();
  });

  it("should render 0 itens when totalItens is 0", () => {
    const screen = renderWithTheme(<ButtonBasket onPress={() => {}} />);

    expect(screen.getByTestId("total_itens_text")).toBeTruthy();
    expect(screen.getByTestId("total_itens_text").props.children).toBe(0);
  });

  it("should render 1 itens when totalItens is 1", async () => {
    const screen = renderWithTheme(<ButtonBasket onPress={() => {}} />);

    act(() => useCartStore.getState().addItem(createAProduct()));

    act(() => useCartStore.getState().clearAnimationCart());

    expect(screen.getByText("1")).toBeDefined();
  });
});
