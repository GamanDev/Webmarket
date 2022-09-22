const initialState = {
  currencyIndex: 0,
};

export const CHANGE_CURRENCY = "CHANGE_CURRENCY";

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return { currencyIndex: action.payload };
    default:
      return state;
  }
};

export default currencyReducer;
