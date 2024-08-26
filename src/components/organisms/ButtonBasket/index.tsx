import { useEffect, useRef } from "react";
import { Pressable, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useCartStore } from "../../../store/cart";
import { Box } from "../../atoms/Box";

type TButtonBasket = {
  onPress?(): void;
};

export function ButtonBasket({ onPress }: TButtonBasket) {
  const ref = useRef<LottieView>(null);
  const { showAnimationCart, clearAnimationCart, totalItens } = useCartStore();

  useEffect(() => {
    if (showAnimationCart) {
      ref.current?.resume();
    }
  }, [showAnimationCart]);

  let timeout: NodeJS.Timeout;
  function onAnimationFinished() {
    timeout = setTimeout(() => {
      clearAnimationCart();
    }, 400);
  }

  useEffect(() => {
    return () => clearTimeout(timeout);
  });

  return (
    <Pressable testID="button_basket" onPress={onPress ? onPress : () => {}}>
      <Box position="relative">
        <LottieView
          testID="lottie_view"
          ref={ref}
          source={require("./basket_animated.json")}
          progress={0.31}
          loop={false}
          autoPlay={false}
          onAnimationFinish={onAnimationFinished}
          style={{
            width: 35,
            height: 35,
          }}
        />

        {!showAnimationCart && (
          <Box
            position="absolute"
            bg="primary"
            style={{
              padding: 2,
              paddingHorizontal: 4,
            }}
            right={0}
            borderRadius={20}
          >
            <Text
              testID="total_itens_text"
              style={{ fontSize: 8, color: "white" }}
            >
              {totalItens}
            </Text>
          </Box>
        )}
      </Box>
    </Pressable>
  );
}
