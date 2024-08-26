import { useCallback, useMemo, useState } from "react";
import { useCartStore } from "../../store/cart";
import { useGetProductsInfinityQuery } from "../../integration/products/hooks";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { TProduct } from "../../integration/products/types";
import { TListProductsScreen } from "./types";

export function useListProductsScreen({ navigation }: TListProductsScreen) {
  const [isScrolling, setIsScroll] = useState(false);

  const handleGoToCart = () => {
    navigation?.navigate("cart");
  };

  const { data } = useGetProductsInfinityQuery();

  const { addItem, showAnimationCart, existsInCart, removeItem, itemSelected } =
    useCartStore();

  const list = useMemo(
    () =>
      data?.pages.reduce((acc, page) => {
        return [...acc, ...page];
      }),
    [data]
  );

  const listenerOnScroll = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (nativeEvent.contentOffset.y > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    },
    []
  );

  const handlePressInProduct = useCallback(
    (exists = false, product: TProduct): void => {
      if (exists) {
        removeItem(product.id);
      } else {
        addItem(product);
      }
    },
    [removeItem, addItem]
  );

  return {
    isScrolling,
    existsInCart,
    handleGoToCart,
    handlePressInProduct,
    itemSelected,
    list,
    listenerOnScroll,
    showAnimationCart,
  };
}
