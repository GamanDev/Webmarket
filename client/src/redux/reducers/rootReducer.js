import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import formReducer from "./formReducer";

export const rootReducer = combineReducers({
  cartReducer,
  formReducer,
});
