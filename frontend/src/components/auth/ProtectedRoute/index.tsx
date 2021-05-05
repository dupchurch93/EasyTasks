import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props: any) => {
  const sessionUser = useSelector((state: any) => state.session.user);
  return (
    <Route>{sessionUser ? props.children : <Redirect to="/login" />}</Route>
  );
};

export default ProtectedRoute;
