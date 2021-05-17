import React from "react";
import { RouteProps } from "react-router"
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../../store/index"

const ProtectedRoute = (props: RouteProps) => {
  const sessionUser = useSelector((state: RootState) => state.session.user);
  return (
    <Route>{sessionUser.id ? props.children : <Redirect to="/login" />}</Route>
  );
};

export default ProtectedRoute;
