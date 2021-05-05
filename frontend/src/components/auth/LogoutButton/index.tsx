import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";

const LogoutButton = () => {
  const history = useHistory();
  // const sessionUser = useSelector((state: any) => state.session.user);
  const dispatch = useDispatch();

  const onLogout = async (e: any) => {
    await dispatch(logout());
    history.push("/");
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
