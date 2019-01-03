import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import rootReducer from  './reducers/balance';
import { Provider } from './components/App';
import App from "./components/App";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);