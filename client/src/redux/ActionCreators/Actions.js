import { ADD_PRICE, REMOVE_PRICE } from "../reducers/cartReducer";
import {
  SET_CAPACITY,
  SET_COLOR,
  SET_SIZE,
  SET_TOUCH_ID,
  SET_USB,
} from "../reducers/formReducer";

export function createItemObjAction(obj) {
  return { type: ADD_PRICE, payload: obj };
}
export function deleteItemObjAction(obj) {
  return { type: REMOVE_PRICE, payload: obj };
}

export function boxUSB(check) {
  return { type: SET_USB, payload: check };
}
export function boxTouchID(check) {
  return { type: SET_TOUCH_ID, payload: check };
}
export function boxCapacity(check) {
  return { type: SET_CAPACITY, payload: check };
}
export function boxColor(check) {
  return { type: SET_COLOR, payload: check };
}
export function boxSize(check) {
  return { type: SET_SIZE, payload: check };
}
