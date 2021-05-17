import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../store/session";
import { RootState } from "../../../store/index"

const LoginForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state: RootState) => state.session.user);

  // const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // if (sessionUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <form data-testid="login-form" onSubmit={onLogin}>
      <div>
        {/* {errors.map((error) => (
          <div>{error}</div>
        ))} */}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          data-testid="email-input"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          data-testid="password-input"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button data-testid="submit-button" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
