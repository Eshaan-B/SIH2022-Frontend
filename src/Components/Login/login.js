import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import "./login.css";
import * as ball_animation from "./61182-ball-sport.json";

function Login() {
  /**
   * The options array should contain objects.
   * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
   */
  return (
    <div className="login">
      <div className="image">
        <Lottie animationData={ball_animation} />
      </div>
      <div className="form-container">
        <h1>LogIn</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Aadhar Number"
            autoComplete="off"
            required
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            required
          />
          <button type="submit">Login with Email</button>
          <div className="or">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <button type="submit">Login with Google</button>
        </form>

        <Link to={"/signup"}>
          <span>Sign up instead?</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
