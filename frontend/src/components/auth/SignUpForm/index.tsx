import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, login } from "../../../store/session";

const SignUpForm = () => {
  const dispatch = useDispatch();

  // Initialize the state of all form inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Grab the user from the redux store
  const sessionUser = useSelector((state: any) => state.session.user);

  const onSignUp = async (e: any) => {
    e.preventDefault();
    // let newErrors = [];
    if (password === repeatPassword) {
      await dispatch(createUser({ username, email, password }));
      await setUsername("");
      await setEmail("");
      await setPassword("");
      await setRepeatPassword("");

      // .catch(async (res) => {
      //   const data = await res.json();
      //   if (data && data.errors) {
      //     newErrors = data.errors;
      //   }
      // });
    }
  };

  const loginAsDemo = async (e: any) => {
    setEmail("demo@aa.io");
    setPassword("password");
    await dispatch(login(email, password));
  };

  const updateUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e: any) => {
    setRepeatPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className="form_input">
        <input
          placeholder="Username"
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className="form_input">
        <input
          placeholder="Email"
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className="form_input">
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className="form_input">
        <input
          placeholder="Confirm Password"
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div>
        <button type="submit" onClick={onSignUp}>
          Sign Up
        </button>
      </div>
      <div>
        <button onClick={loginAsDemo}>Try as Demo User</button>
      </div>
    </form>
  );
};

export default SignUpForm;
