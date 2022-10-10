const initialState = {
  ItemsInCart: {},
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const LOCAL_STORE = "LOCAL_STORE";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log(action.payload.key);
      if (state.ItemsInCart[action.payload.key]) {
        console.log("exist");
        state.ItemsInCart[action.payload.key].amount++;
        return {
          ...state,
        };
      }
      console.log("doesnt exist");
      return {
        ItemsInCart: {
          ...state.ItemsInCart,
          [action.payload.key]: {
            item: { ...action.payload.item },
            amount: 1,
            selected: action.payload.selected,
          },
        },
      };
    case REMOVE_ITEM:
      return {};
    // case LOCAL_STORE:
    //   return { ItemsInCart: action.payload };
    default:
      return state;
  }
};
