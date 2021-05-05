import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  // Upon loading the App component aunthenticate is fired
  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* Navbar will be here */}
      <Switch>
        <Route path="/" exact={true}>
          {/* <Home /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
