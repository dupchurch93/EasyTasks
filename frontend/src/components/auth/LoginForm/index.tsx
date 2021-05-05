import React, { useState, FC } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../store/session";

const LoginForm  = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state: any) => state.session.user);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e: any) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    // if (user.errors) {
    //   setErrors(user.errors);
    // }
  };

  const updateEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e: any) => {
    setPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
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
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;