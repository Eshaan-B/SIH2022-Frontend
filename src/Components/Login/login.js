import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import "animate.css";
function Login() {
  const navigate = Navigate;
  function send() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginEmail: email,
        loginPass: password,
      }),
    };
    console.log(email, password);
    fetch("http://192.168.195.84:8000/api/users/login", requestOptions).then(
      (response) => {
        const resp = response.json();
        console.log(resp);
        navigate("/");
      }
    );
  }

  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  // step_counter = 0;
  function update_step(data) {
    if (step == 2) {
      send();
    }
    console.log(email);
    console.log(step);
    console.log(password);
    next[step].submit(data);
    setStep(step + 1);
    console.log("Step updated");
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function updateEmail(data) {
    setEmail(data);
  }
  function updatePassword(data) {
    setPass(data);
    console.log(password);
  }

  //SEND END AS THE LAST submit parameter
  const next = [
    {
      type: "email",
      text: "Email",
      submit: updateEmail,
    },
    {
      type: "password",
      text: "Password",
      submit: updatePassword,
    },
  ];
  return (
    <div className="login-container">
      <section>
        <form onSubmit={handleSubmit} className="login-form">
          <Card
            text={next[step]?.text}
            type={next[step]?.type}
            click={update_step}
            submit={next[step]?.submit}
          />
        </form>
      </section>
    </div>
  );
}
export default Login;

function Card({ type, text, click, submit }) {
  const [data, setData] = useState("");

  function clear() {
    const inputEl = document.querySelector("input");
    inputEl.value = ``;
  }
  function nextCard() {
    console.log(data);
    click(data);
    clear();
  }
  return (
    <div>
      <label className="label-name">
        <input
          name="name"
          id="card-input name"
          type={type}
          onChange={(e) => setData(e.target.value)}
          required
          className="input-login"
          autoComplete="off"
        />
        <div className="label-text">{text}</div>
      </label>
      <button onClick={nextCard} className="btn-for-next">
        <i className="fa-solid fa-angle-right" />
      </button>
    </div>
  );
}
