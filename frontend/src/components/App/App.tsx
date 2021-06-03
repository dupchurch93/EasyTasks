import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store/session";
import LoginForm from "../Auth/LoginForm";
import SignUpForm from "../Auth/SignUpForm";
import "./App.css";
import Splash from "../Sections/Splash";
import ProtectedRoute from "../Auth/ProtectedRoute";
import Home from "../Sections/Home";
import Navbar from "../Navigation/Navbar/Navbar"

function App() {
  const dispatch = useDispatch();

  // Upon loading the App component aunthenticate is fired
  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact={true}>
            <Splash />
          </Route>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/home" exact={true}>
            <Home/>
          </ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
