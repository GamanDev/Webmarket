const initialState = {
  ItemsInCart: JSON.parse(window.localStorage.getItem("cartStore")) || {},
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const LOCAL_STORE = "LOCAL_STORE";

function getItems(item) {
  window.localStorage.setItem("cartStore", JSON.stringify(item));
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const result = {
        ItemsInCart: {
          ...state.ItemsInCart,
          [action.payload.key]: state.ItemsInCart[action.payload.key]
            ? {
                ...state.ItemsInCart[action.payload.key],
                amount: state.ItemsInCart[action.payload.key].amount + 1,
              }
            : {
                ...action.payload,
                amount: 1,
              },
        },
      };

      getItems({ ...result.ItemsInCart });
      return result;

    case REMOVE_ITEM:
      if (state.ItemsInCart[action.payload.key].amount > 1) {
        const remover = {
          ItemsInCart: {
            ...state.ItemsInCart,
            [action.payload.key]: {
              ...state.ItemsInCart[action.payload.key],
              amount: state.ItemsInCart[action.payload.key].amount - 1,
            },
          },
        };
        getItems({ ...remover.ItemsInCart });
        return remover;
      } else {
        delete state.ItemsInCart[action.payload.key];
        getItems({ ...state.ItemsInCart });
        return { ...state, ItemsInCart: { ...state.ItemsInCart } };
      }
    default:
      return state;
  }
};
