import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const ProtectedRoute = (props: RouteProps) => {
  const sessionUser = useSelector((state: RootState) => state.session.user);
  return (
    <Route>{sessionUser ? props.children : <Redirect to="/login" />}</Route>
  );
};

export default ProtectedRoute;
