import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer);

// index.js <= store.js
