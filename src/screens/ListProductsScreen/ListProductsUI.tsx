import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../styles/theme";
import { Header } from "../../components/organisms/Header";
import { CardProduct } from "../../components/organisms/CardProduct";
import { useListProductsScreen } from "./useListProducts";
import { EmptyListProducts } from "../../components/molecules/EmptyListProducts";

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
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: insets.bottom + theme.spacing.m,
        paddingHorizontal: theme.spacing.s,
      }}
      keyExtractor={(item) => item.id.toString()}
      data={list}
      ListHeaderComponent={() => (
        <Header handleGoToCart={handleGoToCart} isScrolling={isScrolling} />
      )}
      ListEmptyComponent={() => <EmptyListProducts />}
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
