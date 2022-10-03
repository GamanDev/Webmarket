const initialState = {
  ItemsInCart: [],
};
//  {key: unique_key, amount: 1, [attribute] : attribute.value}

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const LOCAL_STORE = "LOCAL_STORE";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (
        state.ItemsInCart.findIndex(
          (el) => el.key_unique === action.payload.key_unique
        ) >= 0
      ) {
        state.ItemsInCart[
          state.ItemsInCart.findIndex(
            (el) => el.key_unique === action.payload.key_unique
          )
        ].amount++;
        return { ItemsInCart: [...state.ItemsInCart] };
      } else {
        return {
          ItemsInCart: [...state.ItemsInCart, action.payload],
        };
      }
    case REMOVE_ITEM:
      state.ItemsInCart[
        state.ItemsInCart.findIndex(
          (el) => el.key_unique === action.payload.key_unique
        )
      ].amount--;

      return { ItemsInCart: state.ItemsInCart.filter((el) => el.amount > 0) };
    case LOCAL_STORE:
      return { ItemsInCart: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
