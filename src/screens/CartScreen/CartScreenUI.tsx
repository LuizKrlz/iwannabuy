import { FlatList } from "react-native";
import { HeaderListProducts } from "../../components/organisms/HeaderListProducts";
import { ProductListItem } from "../../components/organisms/ProductListItem";
import { TCartScreenUIProps } from "./types";
import { Box } from "../../components/atoms/Box";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../styles/theme";
import { Typography } from "../../components/atoms/Typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { currencyFormat } from "../../utils/numbersFormat";

export function CartScreenUI({
  cart,
  totalItens,
  total,
  handlePressOnDelete,
  handleGoBack,
}: TCartScreenUIProps) {
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();

  return (
    <Box bg="bg" flex={1}>
      <HeaderListProducts isScrolling={false} handleGoBack={handleGoBack} />
      <Box px="m" pb="m">
        <Typography variant="titleTwo" fontWeight={500} color="black">
          {totalItens} produtos adicionados:
        </Typography>
      </Box>
      <FlatList
        style={{ flex: 1 }}
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.m,
        }}
        ListEmptyComponent={() => (
          <Box height={300} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="titleTwo" fontWeight={600} color="gray">
              Não há itens adicionados ao carrinho
            </Typography>
          </Box>
        )}
        renderItem={({ item }) => (
          <ProductListItem
            title={item.title}
            images={item.images}
            onDelete={() => handlePressOnDelete(item.id)}
          />
        )}
      />
      <Box
        px="m"
        py="m"
        style={{ paddingBottom: insets.bottom + 10 }}
        borderTopWidth={1}
        borderLeftWidth={0.5}
        borderRightWidth={0.5}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        borderColor="secondary"
      >
        <Box flexDirection="row" justifyContent="space-between">
          <Typography variant="titleTwo">Valor Total:</Typography>
          <Typography variant="titleTwo" fontWeight={700}>
            {total ? currencyFormat(total) : "R$ 0,00"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
