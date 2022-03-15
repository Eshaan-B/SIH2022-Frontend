import React from "react";
import "./about.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div>
      <div>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
      <div className="signup">
        <Link to="/signup">
          <button className="">SignUp</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
