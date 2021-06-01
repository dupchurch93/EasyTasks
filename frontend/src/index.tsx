import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./utils/reportWebVitals";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import BoardViewContextProvider from "./context/BoardViewContext";
import SessionContextProvider from "./context/SessionContext"

const store = configureStore({});

// Initialize a root with routing and the redux store providers
const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <SessionContextProvider>
        <BoardViewContextProvider>
          <App />
        </BoardViewContextProvider>
      </SessionContextProvider>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

export type AppDispatch = typeof store.dispatch
export const UseAppDispatch: any = () => {
  useDispatch<AppDispatch>()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
