// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import LoginForm from "./components/auth/LoginForm";
import App from "./App";

describe("It should render the login form", () => {
    beforeEach(() => {
        render(<LoginForm/>)
    });
    it('should have an email input', () => {
        const emailInput = screen.getByText()
    })
})
