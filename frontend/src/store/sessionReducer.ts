import {
  User,
  SET_SESSION,
  REMOVE_SESSION,
  SessionDispatchTypes,
} from "./sessionActionTypes";

const initialState = {
  user: null,
};

interface InitialState {
  user: null;
}

const sessionReducer = (
  state: InitialState | User = initialState,
  action: SessionDispatchTypes
) => {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, user: action.payload };
    case REMOVE_SESSION:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
