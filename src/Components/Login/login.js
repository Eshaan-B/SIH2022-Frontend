import React from "react";
import "./login.css";
import { useEffect } from "react";

function Login() {
  // const switchers = [...document.querySelectorAll(".switcher")];

  useEffect(() => {
    const loginEl = document.querySelector(".login-wrapper");
    const signupEl = document.querySelector(".signup-wrapper");
    const login_btn = document.querySelector(".switcher-login");
    const signup_btn = document.querySelector(".switcher-signup");

    login_btn.addEventListener("click", () => {
      signupEl.classList.remove("is-active");
      loginEl.classList.add("is-active");
    });
    signup_btn.addEventListener("click", () => {
      loginEl.classList.remove("is-active");
      signupEl.classList.add("is-active");
    });
  });

  return (
    <section className="forms-section">
      <div className="forms">
        <div className="form-wrapper login-wrapper">
          <button type="button" className="switcher switcher-login">
            Login
            <span className="underline" />
          </button>
          <form className="form form-login">
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
        <div className="form-wrapper is-active signup-wrapper">
          <button type="button" className="switcher switcher-signup">
            Sign Up
            <span className="underline" />
          </button>
          <form className="form form-signup">
            <fieldset>
              <legend>
                Please, enter your email, password and password confirmation for
                sign up.
              </legend>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">
                  Confirm password
                </label>
                <input id="signup-password-confirm" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
