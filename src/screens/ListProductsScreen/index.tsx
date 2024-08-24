import { useListProductsScreen } from "./useListProducts";
import { ListProductsUI } from "./ListProductsUI";

export function ListProductsScreen() {
  const props = useListProductsScreen();

  return <ListProductsUI {...props} />;
}
