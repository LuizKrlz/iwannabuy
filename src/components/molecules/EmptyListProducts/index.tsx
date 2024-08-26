import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";

export function EmptyListProducts() {
  return (
    <Box alignItems="center" justifyContent="center" height={300}>
      <Typography variant="titleTwo" fontWeight={"600"}>
        Nenhum produto encontrado
      </Typography>
    </Box>
  );
}
