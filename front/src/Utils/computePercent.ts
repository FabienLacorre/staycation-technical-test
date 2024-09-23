export const computePercent = (oldPrice: number, price: number): number => {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
};
