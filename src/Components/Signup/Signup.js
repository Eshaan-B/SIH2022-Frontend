import React, { useState } from "react";
import { useEffect } from "react";
import "./Signup.css";

function Signup() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  // step_counter = 0;
  function update_step() {
    console.log(email);
    console.log(name);
    console.log(password);
    next[0].submit();
    setStep(step + 1);
    console.log("Step updated");
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function updateEmail(e) {
    setEmail(e.target.value);
  }
  function updateName(e) {
    setName(e.target.value);
  }
  function updatePassword(e) {
    setPass(e.target.value);
  }

  //SEND END AS THE LAST submit parameter
  const next = [
    {
      type: "email",
      text: "Email",
      submit: updateEmail,
    },
    {
      type: "text",
      text: "Full Name",
      submit: updateName,
    },
    {
      type: "password",
      text: "Password",
      submit: updatePassword,
    },
  ];
  return (
    <div className="container">
      <section>
        <form onSubmit={handleSubmit}>
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
export default Signup;

function Card({ type, text, click, submit }) {
  function clear() {
    const inputEl = document.querySelector("input");
    inputEl.value = ``;
  }
  function nextCard() {
    click();
    clear();
  }
  return (
    <div>
      <label>
        <input
          name="name"
          id="card-input name"
          type={type}
          onChange={(e) => submit(e)}
          required
        />
        <div className="label-text">{text}</div>
      </label>
      <button onClick={nextCard}>
        <i className="fa-solid fa-angle-right" />
      </button>
    </div>
  );
}
