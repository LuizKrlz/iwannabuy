export function currencyFormat(value: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  });

  return formatter.format(value);
}
