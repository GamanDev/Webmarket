export function showPriceSymbol(object, currencyIndex) {
  const price = Object.keys(object)[0];
  return object[price].item.prices[currencyIndex].currency.symbol;
}

export function getTotalCount(object) {
  return Object.keys(object).reduce((acc, key) => acc + object[key].amount, 0);
}

export function calculatePrice(object, currencyIndex) {
  return Object.keys(object)
    .reduce(
      (acc, key) =>
        acc +
        object[key].item.prices[currencyIndex].amount * object[key].amount,
      0
    )
    .toFixed(2);
}
