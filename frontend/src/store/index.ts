import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
});

let enhancer: any;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState: any) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
