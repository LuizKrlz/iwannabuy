import { Platform, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";

import { Box } from "../atoms/Box";
import { Theme } from "../../styles/theme";
import { Typography } from "../atoms/Typography";
import { ButtonBasket } from "./ButtonBasket";
import AntDesign from "@expo/vector-icons/AntDesign";

type THeaderListProducts = {
  isScrolling: boolean;
  handleGoToCart?: () => void;
  handleGoBack?: () => void;
};

export function HeaderListProducts({
  isScrolling,
  handleGoToCart,
  handleGoBack,
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
        {handleGoBack && (
          <Pressable onPress={handleGoBack}>
            <AntDesign name="arrowleft" size={24} color={theme.colors.gray} />
          </Pressable>
        )}
        <Typography
          textAlign="left"
          ml="m"
          style={{ flex: 1 }}
          variant="header"
          fontWeight={"600"}
          color={"secondary"}
        >
          I Wanna Buy
        </Typography>

        <ButtonBasket onPress={handleGoToCart} />
      </Box>
    </>
  );
}
