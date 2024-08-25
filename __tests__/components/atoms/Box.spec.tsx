import { render } from "@testing-library/react-native";

import { Box } from "../../../src/components/atoms/Box";

describe("Componens atoms/Box", () => {
  it("should render correctly", () => {
    const screen = render(<Box />);

    expect(screen).toBeTruthy();
  });
});
