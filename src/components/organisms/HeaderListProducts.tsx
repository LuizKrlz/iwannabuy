import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";

import { Box } from "../atoms/Box";
import { Theme } from "../../styles/theme";
import { Typography } from "../atoms/Typography";
import { ButtonBasket } from "./ButtonBasket";

type THeaderListProducts = {
  isScrolling: boolean;
  handleGoToCart: () => void;
};

export function HeaderListProducts({
  isScrolling,
  handleGoToCart,
}: THeaderListProducts) {
  const theme = useTheme<Theme>();

  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />
      <Box
        p="s"
        bg={isScrolling ? "grayLight" : "bg"}
        testID="header_list_products_container"
        style={[
          { paddingTop: insets.top, paddingBottom: theme.spacing.l },
          isScrolling && {
            elevation: Platform.OS !== "android" ? 1 : 5,
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 20,
            shadowOpacity: 0.4,
          },
        ]}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="header" fontWeight={"600"} color={"secondary"}>
          I Wanna Buy
        </Typography>

        <ButtonBasket onPress={handleGoToCart} />
      </Box>
    </>
  );
}
