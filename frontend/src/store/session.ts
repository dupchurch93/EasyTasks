const SET_SESSION = "session/SET_SESSION";
export const REMOVE_SESSION = "session/REMOVE_SESSION";

const setSession = (user: any) => {
  return {
    type: SET_SESSION,
    user,
  };
};

const removeSession = () => {
  return {
    type: REMOVE_SESSION,
  };
};

export const authenticate = () => async (dispatch: any) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const user = await response.json();
  if (!user.errors) {
    dispatch(setSession(user));
  }
  return user;
};

export const login = (email: string, password: string) => async (
  dispatch: any
) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const user = await response.json();
  if (!user.errors) {
    dispatch(setSession(user));
  }
  return user;
};

export const logout = () => async (dispatch: any) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    dispatch(removeSession());
  }
  return await response.json();
};

export const createUser = (user: object) => async (dispatch: any) => {
  const res = await fetch(`/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const newUser = await res.json();

  dispatch(setSession(newUser));
};

const initialState = {
  user: null,
};

const sessionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, user: action.user };
    case REMOVE_SESSION:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
