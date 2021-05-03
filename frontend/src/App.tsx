import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { restoreUser } from "./store/session";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  // Upon loading the App component restoreUser is fired
  useEffect(() => {
    dispatch(restoreUser()).then(() => {
      setLoaded(true);
    });
  }, [dispatch]);

  // Nothing is displayed if the user is not restored
  if (!loaded) {
    return null;
  }

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
