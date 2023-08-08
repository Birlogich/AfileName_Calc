import { combineReducers } from "redux";
import { barsReducer } from "./bars/barsReducer";

export const rootReducer = combineReducers({
  bars: barsReducer,
});
