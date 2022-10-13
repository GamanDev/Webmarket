export function showTotalPrice(object, currencyIndex) {
  const itemsCount = Object.keys(object)
    .reduce(
      (acc, key) =>
        acc +
        object[key].item.prices[currencyIndex].amount * object[key].amount,
      0
    )
    .toFixed(2);
  return itemsCount;
}
