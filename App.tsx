import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { ThemeProvider, useTheme } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme, { Theme } from "./src/styles/theme";
import { Routes } from "./src/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
    },
  },
});

export default function App() {
  const myTheme = useTheme<Theme>();
  const defaultTheme = DefaultTheme;

  defaultTheme.colors.background = myTheme.colors["bg"];

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={defaultTheme}>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
