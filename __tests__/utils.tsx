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
