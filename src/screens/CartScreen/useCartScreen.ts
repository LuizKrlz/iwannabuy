import { useCartStore } from "../../store/cart";
import { TCartScreen } from "./types";

export function useCartScreen({ navigation }: TCartScreen) {
  const { cart, totalItens, total, removeItem } = useCartStore();

  const handleGoBack = () => navigation.goBack();

  /**
   * @TODO
   * Ajustar comportamento
   */
  const handlePressOnDelete = (id: number) => {
    removeItem(id);
  };

  return {
    cart,
    total,
    totalItens,
    handleGoBack,
    handlePressOnDelete,
  };
}
