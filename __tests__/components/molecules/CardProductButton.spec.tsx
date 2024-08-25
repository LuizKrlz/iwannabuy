import { fireEvent } from "@testing-library/react-native";
import { CardProductButton } from "../../../src/components/molecules/CardProductButton/CardProductButton";
import { renderWithTheme } from "../../utils";

describe("Components molecules/CardProductButton", () => {
  it("should render correctly", () => {
    const screen = renderWithTheme(
      <CardProductButton alreadyAdded={false} onPress={() => null} />
    );

    expect(screen).toBeTruthy();
  });

  it("should be render title as 'Add' when alreadyAdded is false", () => {
    const screen = renderWithTheme(
      <CardProductButton alreadyAdded={false} onPress={() => null} />
    );

    expect(screen.getByText("Add")).toBeTruthy();
  });

  it("should be render title as 'Remove' when alreadyAdded is true", () => {
    const screen = renderWithTheme(
      <CardProductButton alreadyAdded={true} onPress={() => null} />
    );

    expect(screen.getByText("Remove")).toBeTruthy();
  });

  it("shouldn't can be pressed when isDisabled is true", () => {
    const mockOnPress = jest.fn();
    const screen = renderWithTheme(
      <CardProductButton isDisabled alreadyAdded={true} onPress={mockOnPress} />
    );

    const button = screen.getByTestId("card_product_button");

    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });

  it("should can be pressed when isDisabled is false and call onPress function", () => {
    const mockOnPress = jest.fn();
    const screen = renderWithTheme(
      <CardProductButton alreadyAdded={true} onPress={mockOnPress} />
    );

    const button = screen.getByTestId("card_product_button");

    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
