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
    const email = screen.getByTestId("email-input") as HTMLInputElement;
    fireEvent.change(email, {target:{value:"EaskTask@task.com"}});
    expect(email.value).toBe("EaskTask@task.com");
  });

  it("should allow entering a password", () => {
    const password = screen.getByTestId("password-input") as HTMLInputElement;
    fireEvent.change(password, {target:{value:"password"}});
    expect(password.value).toBe("password");
  });

  it("submit function called upon hitting login button", () => {
    const submit = screen.getByTestId("submit-button");
    // ToDo understand what shallow from enzyme is doing.
    // ToDo are we creating a proxy test by rendering a fake component or should we test the real thing?
    // ToDo StackOverflow Link: https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
    // const mockFunction = jest.fn();
    // fireEvent.click(submit);
    // expect().toHaveBeenCalledTimes(1);
  })
  //   it("should have an email input", () => {
  //     const emailInput = screen.getByText();
  //   });
  //   it("should have a password input", () => {
  //     const emailInput = screen.getByText();
  //   });
});
