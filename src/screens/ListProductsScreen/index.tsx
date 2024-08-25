import { useListProductsScreen } from "./useListProducts";
import { ListProductsUI } from "./ListProductsUI";
import { TListProductsScreen } from "./types";

export function ListProductsScreen(screenProps: TListProductsScreen) {
  const props = useListProductsScreen(screenProps);

  return <ListProductsUI {...props} />;
}
