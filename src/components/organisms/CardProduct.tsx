import { Box } from "../atoms/Box";
import { Typography } from "../atoms/Typography";
import { currencyFormat } from "../../utils/numbersFormat";
import { TProduct } from "../../integration/products/types";
import { CardProductButton } from "../molecules/CardProductButton/CardProductButton";
import { ImageWithFallback } from "../atoms/ImageWithFallback";

type TCardProduct = {
  alreadyAdded?: boolean;
  handlePressButton: () => void;
  product: TProduct;
  isDisabled?: boolean;
};

export function CardProduct({
  alreadyAdded,
  handlePressButton,
  product,
  isDisabled,
}: TCardProduct) {
  return (
    <Box
      flex={1}
      margin="s"
      width={188}
      bg="card"
      borderRadius={20}
      overflow="hidden"
    >
      {product.images && product.images.length && (
        <ImageWithFallback uri={product.images[0]} />
      )}
      <Box p="s" flex={1} maxHeight={100} justifyContent="space-between">
        <Typography
          numberOfLines={2}
          variant="titleThree"
          fontWeight={"500"}
          color="black"
        >
          {product.title}
        </Typography>

        <Typography variant="body" fontWeight={"bold"} textAlign="right" mt="s">
          {currencyFormat(product.price)}
        </Typography>
      </Box>
      <CardProductButton
        isDisabled={isDisabled}
        isLoading={isDisabled}
        onPress={handlePressButton}
        alreadyAdded={alreadyAdded}
      />
    </Box>
  );
}
