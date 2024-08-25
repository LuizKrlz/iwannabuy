import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../styles/theme";
import { HeaderListProducts } from "../../components/organisms/HeaderListProducts";
import { CardProduct } from "../../components/organisms/CardProduct";
import { useListProductsScreen } from "./useListProducts";

export function ListProductsUI({
  isScrolling,
  existsInCart,
  handleGoToCart,
  handlePressInProduct,
  itemSelected,
  list,
  listenerOnScroll,
  showAnimationCart,
}: ReturnType<typeof useListProductsScreen>) {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();

  return (
    <FlatList
      numColumns={2}
      stickyHeaderIndices={[0]}
      contentContainerStyle={{
        paddingBottom: insets.bottom + theme.spacing.m,
        paddingHorizontal: theme.spacing.s,
      }}
      keyExtractor={(item) => item.id.toString()}
      data={list}
      ListHeaderComponent={() => (
        <HeaderListProducts
          handleGoToCart={handleGoToCart}
          isScrolling={isScrolling}
        />
      )}
      onScroll={listenerOnScroll}
      renderItem={({ item }) => {
        const findInCart = existsInCart(item);

        return (
          <CardProduct
            product={item}
            isDisabled={showAnimationCart && itemSelected === item.id}
            alreadyAdded={!!findInCart}
            handlePressButton={() => handlePressInProduct(!!findInCart, item)}
          />
        );
      }}
    />
  );
}
