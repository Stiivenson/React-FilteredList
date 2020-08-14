import {
  combineReducers
} from "redux";

import commentReducer from "./commentReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  comment: commentReducer,
  filter: filterReducer
});

export default rootReducer;