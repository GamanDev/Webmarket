import { ADD_ITEM, LOCAL_STORE, REMOVE_ITEM } from "../reducers/cartReducer";
import { CHANGE_CURRENCY } from "../reducers/currencyReducer";

export function currencyChanger(currency) {
  window.localStorage.setItem("currencyIndex", currency);
  return { type: CHANGE_CURRENCY, payload: currency };
}

export function addItemToCart(item) {
  return {
    type: ADD_ITEM,
    payload: {
      key: item.key,
      item: item.item,
      selected: item.selected,
    },
  };
}
export function removeItemFromCart(item) {
  return { type: REMOVE_ITEM, payload: item };
}

export function addLocalStorage(prodcts) {
  return { type: LOCAL_STORE, payload: prodcts };
}
