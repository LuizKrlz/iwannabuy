import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { render } from "@testing-library/react-native";
import { faker } from "@faker-js/faker";
import theme from "../src/styles/theme";
import { TProduct } from "../src/integration/products/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const initialMetrics = {
  frame: { height: 500, width: 300, x: 0, y: 0 },
  insets: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
};

const queryClient = new QueryClient();

export const wrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export function renderWithTheme(component: JSX.Element) {
  return render(
    <SafeAreaProvider initialMetrics={initialMetrics}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {component}
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export function createAProduct(): TProduct {
  return {
    id: faker.number.int({ max: 200 }),
    category: {
      id: faker.number.int({ max: 200 }),
      image: faker.internet.url(),
      name: faker.person.firstName(),
      creationAt: faker.date.recent().toString(),
      updatedAt: faker.date.recent().toString(),
    },
    description: faker.lorem.paragraph(),
    images: [faker.image.url()],
    price: faker.number.float(),
    title: faker.lorem.word(),
    creationAt: faker.date.recent().toString(),
    updatedAt: faker.date.recent().toString(),
  };
}

export function getMockNavigation() {
  return {
    addListener: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    navigate: jest.fn(),
    replace: jest.fn(),
    reset: jest.fn(),
    setOptions: jest.fn(),
    setParams: jest.fn(),
    canGoBack: jest.fn(),
    getId: jest.fn(),
    getParent: jest.fn(),
    getState: jest.fn(),
    isFocused: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
    removeListener: jest.fn(),
  };
}
