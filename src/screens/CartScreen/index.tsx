import { CartScreenUI } from "./CartScreenUI";
import { TCartScreen } from "./types";
import { useCartScreen } from "./useCartScreen";

export function CartScreen({ navigation }: TCartScreen) {
  const props = useCartScreen({ navigation });

  return <CartScreenUI {...props} />;
}
