import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store";
import { composeWithDevTools } from "@redux-devtools/extension";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

// 객체의 key와 value가 동일하다면 한 번만 작성 시 알아서 같은 이름의 value를 전달
// const store = configureStore({ reducer: reducer });

// function reducer(state = 0, action) {
//   switch (action.type) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return 0;
//     default:
//       return state;
//   }
// }

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
