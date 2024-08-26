import { Pressable } from "react-native";
import { Box } from "../atoms/Box";
import { ImageWithFallback } from "../atoms/ImageWithFallback";
import { Typography } from "../atoms/Typography";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../styles/theme";

type TProductListItem = {
  title: string;
  images: string[];
  onDelete(): void;
};

export function ProductListItem({ title, images, onDelete }: TProductListItem) {
  const theme = useTheme<Theme>();
  return (
    <Box flexDirection="row" mb="s" alignItems="center">
      <Box width={80} height={80} overflow="hidden" borderRadius={20} mr="s">
        <ImageWithFallback uri={images[0]} height={80} />
      </Box>
      <Typography
        variant="titleTwo"
        style={{ flex: 1 }}
        pr="s"
        numberOfLines={2}
      >
        {title}
      </Typography>

      <Pressable testID="product_list_item_delete" onPress={onDelete}>
        <AntDesign name="closecircleo" size={24} color={theme.colors.primary} />
      </Pressable>
    </Box>
  );
}
