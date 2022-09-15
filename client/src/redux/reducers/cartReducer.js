const initialState = {
  ItemsInCart: [],
  updated: 0,
};

export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const ADD_PRICE = "ADD_PRICE";
export const REMOVE_PRICE = "REMOVE_PRICE";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRICE:
      if (
        state.ItemsInCart.findIndex((el) => el.name === action.payload.name) >=
        0
      ) {
        state.ItemsInCart[
          state.ItemsInCart.findIndex((el) => el.name === action.payload.name)
        ].count++;
        state.updated += 1;
        return { ...state };
      }
      return {
        ...state,
        ItemsInCart: [...state.ItemsInCart, action.payload],
        updated: state.updated + 1,
      };
    case REMOVE_PRICE:
      if (
        state.ItemsInCart.findIndex((el) => el.name === action.payload.name) >=
        0
      ) {
        state.ItemsInCart[
          state.ItemsInCart.findIndex((el) => el.name === action.payload.name)
        ].count--;
        state.updated -= 1;
        return { ...state };
      }
      return {
        ...state,
        ItemsInCart: [...state.ItemsInCart, action.payload],
        updated: state.updated - 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
