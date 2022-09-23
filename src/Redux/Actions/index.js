import { ADD_ITEM, REMOVE_ITEM } from "../reducers/cartReducer";
import { CHANGE_CURRENCY } from "../reducers/currencyReducer";

export function currencyChanger(currency) {
  return { type: CHANGE_CURRENCY, payload: currency };
}

export function addItemToCart(item) {
  return { type: ADD_ITEM, payload: item };
}
export function removeItemFromCart(item) {
  return { type: REMOVE_ITEM, payload: item };
}
