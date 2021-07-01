export const currencyFormat = (price: number) =>
  new Intl.NumberFormat().format(price) || 500;
