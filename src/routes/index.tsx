import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListProductsScreen } from "../screens/ListProductsScreen";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="products" component={ListProductsScreen} />
    </Stack.Navigator>
  );
}
