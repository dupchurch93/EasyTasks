import { MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

const LogoutButton = () => {
  const history = useHistory();
  // const sessionUser = useSelector((state: RootState) => state.session.user);
  const dispatch = useDispatch();

  const onLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    await dispatch(logout());
    history.push("/");
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
