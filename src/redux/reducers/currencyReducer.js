const initialState = {
  currencyIndex: window.localStorage.getItem("currencyIndex") || 0,
};

export const CHANGE_CURRENCY = "CHANGE_CURRENCY";

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      window.localStorage.setItem("currencyIndex", action.payload);
      return { currencyIndex: action.payload };
    default:
      return state;
  }
};
