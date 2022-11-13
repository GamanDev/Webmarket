const initialState = {
  ItemsInCart: JSON.parse(window.localStorage.getItem("cartStore")) || {},
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const LOCAL_STORE = "LOCAL_STORE";

function setItemsToLocalStorage(item) {
  window.localStorage.setItem("cartStore", JSON.stringify(item));
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const payload = state.ItemsInCart[action.payload.key]
        ? { ...state.ItemsInCart[action.payload.key] }
        : { ...action.payload };

      const result = {
        ...state,
        ItemsInCart: {
          ...state.ItemsInCart,
          [action.payload.key]: {
            ...payload,
            amount: state.ItemsInCart[action.payload.key]
              ? state.ItemsInCart[action.payload.key].amount + 1
              : 1,
          },
        },
      };

      setItemsToLocalStorage({ ...result.ItemsInCart });
      return result;

    case REMOVE_ITEM: {
      const result =
        state.ItemsInCart[action.payload.key].amount > 1
          ? {
              ItemsInCart: {
                ...state.ItemsInCart,
                [action.payload.key]: {
                  ...state.ItemsInCart[action.payload.key],
                  amount: state.ItemsInCart[action.payload.key].amount - 1,
                },
              },
            }
          : {
              ItemsInCart: {
                ...state.ItemsInCart,
                [action.payload.key]: undefined,
              },
            };
      setItemsToLocalStorage({ ...result.ItemsInCart });
      return result;
    }
    default:
      return state;
  }
};
