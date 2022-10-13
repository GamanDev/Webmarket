const initialState = {
  ItemsInCart: {},
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const LOCAL_STORE = "LOCAL_STORE";
function controlLocalStorage(item) {
  window.localStorage.setItem("cartStore", JSON.stringify(item));
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (state.ItemsInCart[action.payload.key]) {
        state.ItemsInCart[action.payload.key].amount++;

        const result = {
          ...state,
          ItemsInCart: { ...state.ItemsInCart },
        };
        controlLocalStorage(result);
        return result;
      } else {
        const result = {
          ItemsInCart: {
            ...state.ItemsInCart,
            [action.payload.key]: {
              item: { ...action.payload.item },
              amount: 1,
              selected: [...action.payload.selected],
            },
          },
        };
        controlLocalStorage(result);
        return result;
      }
    case REMOVE_ITEM:
      if (state.ItemsInCart[action.payload.key].amount > 1) {
        state.ItemsInCart[action.payload.key].amount--;

        const result = {
          ...state,
          ItemsInCart: { ...state.ItemsInCart },
        };
        controlLocalStorage(result);
        return result;
      } else {
        delete state.ItemsInCart[action.payload.key];
        const result = {
          ...state,
          ItemsInCart: { ...state.ItemsInCart },
        };
        controlLocalStorage(result);
        return result;
      }
    case LOCAL_STORE:
      return action.payload;
    default:
      return state;
  }
};
