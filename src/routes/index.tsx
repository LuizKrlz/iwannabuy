import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListProductsScreen } from "../screens/ListProductsScreen";
import { TRootStackParamList } from "./types";

const Stack = createNativeStackNavigator<TRootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="products" component={ListProductsScreen} />
    </Stack.Navigator>
  );
}
