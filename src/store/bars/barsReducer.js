import { SET_LOADING, SET_ERROR, SET_LOADED, ADD_BARS } from "./barsActions";

const initialState = {
  status: "idle",
  error: null,
  bars: 0,
};

export const barsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BARS: {
      return { ...state, bars: action.payload };
    }
    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: "rejected",
        error: action.err,
      };
    }
    case SET_LOADED: {
      return {
        ...state,
        status: "fullfiled",
        error: null,
      };
    }
    default:
      return state;
  }
};
