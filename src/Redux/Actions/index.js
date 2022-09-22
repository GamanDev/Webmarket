import { ADD_ITEM } from "../reducers/cartReducer";
import { CHANGE_CURRENCY } from "../reducers/currencyReducer";

export function currencyChanger(currency) {
  return { type: CHANGE_CURRENCY, payload: currency };
}

export function addItemToCart(item) {
  return { type: ADD_ITEM, payload: item };
}
