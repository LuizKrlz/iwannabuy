import { create } from "zustand";
import { TProduct } from "../integration/products/types";

type TCartItem = TProduct;

function getExistingItemInCart(
  cart: TProduct[],
  product: TProduct
): TProduct | undefined {
  return cart.find((item) => item.id === product.id);
}

function calculateTotal(cart: TCartItem[]) {
  return cart.reduce((total, item) => total + item.price, 0);
}

type TCartStore = {
  showAnimationCart: false;
  cart: TCartItem[];
  total: number;
  totalItens: number;
  clearCart: () => void;
  addItem: (product: TProduct) => void;
  removeItem: (product: TProduct) => void;
  existsInCart: (product: TProduct) => TCartItem | undefined;
  clearAnimationCart(): void;
  itemSelected?: number;
};

export const useCartStore = create<TCartStore>((set, get) => ({
  cart: [],
  added: false,
  total: 0,
  totalItens: 0,
  showAnimationCart: false,
  itemSelected: undefined,
  addItem: (product: TProduct) =>
    set((state) => {
      const cartUpdated = [...state.cart, product];

      return {
        cart: cartUpdated,
        total: calculateTotal(cartUpdated),
        totalItens: cartUpdated.length,
        showAnimationCart: true,
        itemSelected: product.id,
      };
    }),
  clearCart: () => set({ cart: [], total: 0 }),
  removeItem: (product: TProduct) =>
    set((state) => {
      const cartUpdated = state.cart.filter((item) => item.id !== product.id);
      return {
        cart: cartUpdated,
        total: calculateTotal(cartUpdated),
        totalItens: cartUpdated.length,
      };
    }),

  existsInCart: (product: TProduct) =>
    getExistingItemInCart(get().cart, product),
  clearAnimationCart: () =>
    set({ showAnimationCart: false, itemSelected: undefined }),
}));
