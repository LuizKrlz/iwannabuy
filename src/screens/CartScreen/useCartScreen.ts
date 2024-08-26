import { Alert } from "react-native";
import { useCartStore } from "../../store/cart";
import { TCartScreen } from "./types";

export function useCartScreen({ navigation }: TCartScreen) {
  const { cart, totalItens, total, removeItem } = useCartStore();

  const handleGoBack = () => navigation.goBack();

  const handlePressOnDelete = (id: number) => {
    Alert.alert("Atenção", "Deseja realmente remover esse produto?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: () => removeItem(id),
      },
    ]);
  };

  return {
    cart,
    total,
    totalItens,
    handleGoBack,
    handlePressOnDelete,
  };
}
