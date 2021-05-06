import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  screen,
} from "@testing-library/react";
// import configureMockStore from "redux-mock-store";
// import fetchMock from "fetch-mock";
// import thunk from "redux-thunk";

import LoginForm from "./index";

describe("It should render the login form", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("should render two empty fields, both email and password", () => {
    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toHaveFormValues({
      email: "",
      password: "",
    });
  });

  it("should allow entering an email", () => {
    const email = screen.getByTestId("email-input") as HTMLInputElement;
    fireEvent.change(email, {target:{value:"EaskTask@task.com"}});
    expect(email.value).toBe("EaskTask@task.com");
  });

  it("should allow entering a password", () => {
    const password = screen.getByTestId("password-input") as HTMLInputElement;
    fireEvent.change(password, {target:{value:"password"}});
    expect(password.value).toBe("password");
  });
  // TODO Add tests for the submit function by using mock jest and redux-mock-store

});
