import { CHANGE_CURRENCY } from "../reducers/currencyReducer";

export function currencyChanger(currency) {
  return { type: CHANGE_CURRENCY, payload: currency };
}
