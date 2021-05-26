import { Dispatch } from "redux";
import {
  User,
  SET_SESSION,
  REMOVE_SESSION,
  SessionDispatchTypes,
} from "./sessionActionTypes";

export const authenticate =
  () => async (dispatch: Dispatch<SessionDispatchTypes>) => {
    const response = await fetch("/api/auth/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    if (!user.errors) {
      dispatch({
        type: SET_SESSION,
        payload: user,
      });
    }
    return user;
  };

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<SessionDispatchTypes>) => {
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
      dispatch({
        type: SET_SESSION,
        payload: user,
      });
    }
    return user;
  };

export const logout =
  () => async (dispatch: Dispatch<SessionDispatchTypes>) => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("OUR RESPONSE", response)
    if (response.ok) {
      dispatch({
        type: REMOVE_SESSION,
      });
    }
    return await response.json();
  };

export const createUser =
  (user: User) => async (dispatch: Dispatch<SessionDispatchTypes>) => {
    const res = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const newUser = await res.json();

    dispatch({
      type: SET_SESSION,
      payload: newUser,
    });
  };
