import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { TRootStackParamList } from "../../routes/types";

export type TListProductsScreen = Pick<
  NativeStackScreenProps<TRootStackParamList, "products">,
  "navigation"
>;
