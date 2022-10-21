import { ADD_ITEM, REMOVE_ITEM } from "../reducers/cartReducer";
import { CHANGE_CURRENCY } from "../reducers/currencyReducer";

export function currencyChanger(currency) {
  return { type: CHANGE_CURRENCY, payload: currency };
}

export function addItemToCart({ key, item, selected }) {
  return {
    type: ADD_ITEM,
    payload: {
      key,
      item,
      selected,
    },
  };
}
export function incrementItem(key) {
  return {
    type: ADD_ITEM,
    payload: {
      key,
    },
  };
}
export function decrementItem(key) {
  return {
    type: REMOVE_ITEM,
    payload: {
      key,
    },
  };
}
