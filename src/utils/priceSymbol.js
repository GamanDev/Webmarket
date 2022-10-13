export function showPriceSymbol(object, currencyIndex) {
  const element = Object.keys(object)[0];
  return object[element].item.prices[currencyIndex].currency.symbol;
}
