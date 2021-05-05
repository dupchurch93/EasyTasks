import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  screen,
} from "@testing-library/react";

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
    const email = screen.getByTestId("email-input");
    fireEvent.change(email);
  });
  //   it("should have an email input", () => {
  //     const emailInput = screen.getByText();
  //   });
  //   it("should have a password input", () => {
  //     const emailInput = screen.getByText();
  //   });
});
