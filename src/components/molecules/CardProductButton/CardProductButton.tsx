import { Pressable } from "react-native";
import { Typography } from "../../atoms/Typography";
import { Box } from "../../atoms/Box";

type TCardProductButton = {
  alreadyAdded?: boolean;
  onPress(): void;
  isDisabled?: boolean;
};

export function CardProductButton({
  isDisabled,
  onPress,
  alreadyAdded,
}: TCardProductButton) {
  return (
    <Pressable
      testID="card_product_button"
      disabled={isDisabled}
      onPress={onPress}
    >
      <Box
        borderTopColor="gray"
        opacity={isDisabled ? 0.4 : 1}
        borderTopWidth={0.5}
        alignItems="center"
        justifyContent="center"
        height={50}
      >
        <Typography>{alreadyAdded ? "Remove" : "Add"}</Typography>
      </Box>
    </Pressable>
  );
}
