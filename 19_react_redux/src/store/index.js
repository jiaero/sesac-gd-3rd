// 여러 개의 리듀서를 하나로 묶어줌
import { combineReducers } from "@reduxjs/toolkit";
// import { countReducer } from "./modules/countReducer";
import { isLoggedinReducer } from "./modules/isLoggedinReducer";
import { bankReducer } from "./modules/bankReducer";
import countReducer from "./modules/countSlice";
import { composeWithDevTools } from "@redux-devtools/extension";

// combineReducers : 여러 개의 리듀서를 하나로 묶어줌
const rootReducer = combineReducers({
  count: countReducer,
  isLoggedIn: isLoggedinReducer,
  money: bankReducer,
});

export default rootReducer;
