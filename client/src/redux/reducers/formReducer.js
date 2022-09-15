const initialState = {
  WithUSB: [],
  TouchID: [],
  Color: [],
  Size: [],
  Capacity: [],
};

export const SET_USB = "SET_USB";
export const SET_TOUCH_ID = "SET_TOUCH_ID";
export const SET_CAPACITY = "SET_CAPACITY";
export const SET_COLOR = "SET_COLOR";
export const SET_SIZE = "SET_SIZE";

export const SET_ATTRIBUTE = "SET_ATTRIBUTE";

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USB:
      if (state.WithUSB.findIndex((el) => el.id === action.payload.id) >= 0) {
        state.WithUSB[
          state.WithUSB.findIndex((el) => el.id === action.payload.id)
        ].value = action.payload.value;
        return { ...state };
      }
      return {
        ...state,
        WithUSB: [...state.WithUSB, action.payload],
      };
    case SET_TOUCH_ID:
      if (state.TouchID.findIndex((el) => el.id === action.payload.id) >= 0) {
        state.TouchID[
          state.TouchID.findIndex((el) => el.id === action.payload.id)
        ].value = action.payload.value;
        return { ...state };
      }
      return {
        ...state,
        TouchID: [...state.TouchID, action.payload],
      };
    case SET_SIZE:
      if (state.Size.findIndex((el) => el.id === action.payload.id) >= 0) {
        state.Size[
          state.Size.findIndex((el) => el.id === action.payload.id)
        ].value = action.payload.value;
        return { ...state };
      }
      return {
        ...state,
        Size: [...state.Size, action.payload],
      };
    case SET_CAPACITY:
      if (state.Capacity.findIndex((el) => el.id === action.payload.id) >= 0) {
        state.Capacity[
          state.Capacity.findIndex((el) => el.id === action.payload.id)
        ].value = action.payload.value;
        return { ...state };
      }
      return {
        ...state,
        Capacity: [...state.Capacity, action.payload],
      };
    case SET_COLOR:
      if (state.Color.findIndex((el) => el.id === action.payload.id) >= 0) {
        state.Color[
          state.Color.findIndex((el) => el.id === action.payload.id)
        ].value = action.payload.value;
        return { ...state };
      }
      return {
        ...state,
        Color: [...state.Color, action.payload],
      };
    default:
      return state;
  }
};
export default formReducer;
