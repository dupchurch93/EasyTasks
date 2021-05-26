export const SET_SESSION = "session/SET_SESSION";
export const REMOVE_SESSION = "session/REMOVE_SESSION";

export interface User {
  username: string;
  email: string;
  id?: number;
  password?: string;
}

export interface Errors {
  errors: string[];
}

export interface setSession {
  type: typeof SET_SESSION;
  payload: User;
}

export interface removeSession {
  type: typeof REMOVE_SESSION;
}

export type SessionDispatchTypes = setSession | removeSession;
