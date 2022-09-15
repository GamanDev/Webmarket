export function setCurrency(curr) {
  let result = 0;

  if (curr.includes("£") || curr.includes("GBP")) {
    result = 1;
    return result;
  }
  if (curr.includes("A$") || curr.includes("AUD")) {
    result = 2;
    return result;
  }
  if (curr.includes("¥") || curr.includes("JPY")) {
    result = 3;
    return result;
  }
  if (curr.includes("₽") || curr.includes("RUB")) {
    result = 4;
    return result;
  }
  if (curr.includes("$") || curr.includes("USD")) return result;
}
