import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCartScreen } from "./useCartScreen";
import { TRootStackParamList } from "../../routes/types";

export type TCartScreenUIProps = ReturnType<typeof useCartScreen>;

export type TCartScreen = Pick<
  NativeStackScreenProps<TRootStackParamList, "cart">,
  "navigation"
>;
