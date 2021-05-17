import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
});

// type EnhancerType = {
//   enhancer: Function
// }

// let enhancer: EnhancerType;

// if (process.env.NODE_ENV === "production") {
//   enhancer = composeWithDevTools(applyMiddleware(thunk));
// } else {
//   const logger = require("redux-logger").default;
//   enhancer = composeWithDevTools(applyMiddleware(thunk, logger));
// }

interface BaseState {}

const logger = require("redux-logger").default;
const configureStore = (preloadedState: BaseState) => {
  return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, logger)));
};

export type RootState = ReturnType<typeof rootReducer>


export default configureStore;
