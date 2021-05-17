import {
  User,
  SET_SESSION,
  REMOVE_SESSION,
  SessionDispatchTypes,
} from "./sessionActionTypes";

const initialState = {
  user: {
    username: "",
    email: "",
  },
};

interface SessionState {
  user: User;
}



const sessionReducer = (
  state: SessionState = initialState,
  action: SessionDispatchTypes
): SessionState => {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, user: action.payload };
    case REMOVE_SESSION:
      return { ...state, user: {
        username: "",
        email: "",
      }};
    default:
      return state;
  }
};

export default sessionReducer;
