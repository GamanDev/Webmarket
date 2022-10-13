export function showTotalCount(object) {
  const itemsCount = Object.keys(object).reduce(
    (acc, key) => acc + object[key].amount,
    0
  );
  return itemsCount;
}
