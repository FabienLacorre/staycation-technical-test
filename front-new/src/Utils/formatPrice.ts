export const formatPrice = (price: number) => {
  return price.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0, // remove decimal numbers
  });
};
