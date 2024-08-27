import { ActivityIndicator, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../styles/theme";
import { Header } from "../../components/organisms/Header";
import { CardProduct } from "../../components/organisms/CardProduct";
import { useListProductsScreen } from "./useListProducts";
import { EmptyListProducts } from "../../components/molecules/EmptyListProducts";
import { useCallback } from "react";
import { TProduct } from "../../integration/products/types";

export function ListProductsUI({
  isScrolling,
  existsInCart,
  handleGoToCart,
  handlePressInProduct,
  itemSelected,
  isFetching,
  list,
  listenerOnScroll,
  showAnimationCart,
  fetchNextPage,
}: ReturnType<typeof useListProductsScreen>) {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();

  const renderItem = useCallback(
    ({ item }: { item: TProduct }) => {
      const findInCart = existsInCart(item);

      return (
        <CardProduct
          product={item}
          isDisabled={showAnimationCart && itemSelected === item.id}
          alreadyAdded={!!findInCart}
          handlePressButton={() => handlePressInProduct(!!findInCart, item)}
        />
      );
    },
    [existsInCart, handlePressInProduct, showAnimationCart, itemSelected]
  );

  return (
    <FlatList
      numColumns={2}
      extraData={isFetching}
      initialNumToRender={3}
      stickyHeaderIndices={[0]}
      columnWrapperStyle={{ gap: theme.spacing.m, marginVertical: 5 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: insets.bottom + theme.spacing.m,
        paddingHorizontal: theme.spacing.s,
      }}
      keyExtractor={(item) => item.id.toString()}
      data={list}
      refreshing={isFetching}
      ListHeaderComponent={() => (
        <Header handleGoToCart={handleGoToCart} isScrolling={isScrolling} />
      )}
      ListFooterComponent={isFetching ? <ActivityIndicator /> : <></>}
      onEndReachedThreshold={3}
      onEndReached={() => fetchNextPage()}
      ListEmptyComponent={() => <EmptyListProducts />}
      onScroll={listenerOnScroll}
      renderItem={renderItem}
    />
  );
}
