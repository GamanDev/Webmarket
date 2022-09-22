const initialState = {
  ItemsInCart: [],
};
//  {key: unique_key, count: 1, [attribute] : attribute.value}

export const ADD_ITEM = "ADD_ITEM";

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
        ].count++;
        return { ...state };
      } else {
        return {
          ItemsInCart: [...state.ItemsInCart, action.payload],
        };
      }

    default:
      return state;
  }
};

export default cartReducer;

//  if (
//    state.ItemsInCart.findIndex((el) => el.name === action.payload.name) >= 0
//  ) {
//    state.ItemsInCart[
//      state.ItemsInCart.findIndex((el) => el.name === action.payload.name)
//    ].count++;
//    state.updated += 1;
//    return { ...state };
//  }
//  return {
//    ...state,
//    ItemsInCart: [...state.ItemsInCart, action.payload],
//    updated: state.updated + 1,
//  };
