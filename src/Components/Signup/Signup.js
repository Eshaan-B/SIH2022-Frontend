import React from "react";
import "./Signup.css";

function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="container">
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            <input name="name" id="name" type="text" required />
            <div className="label-text">Full Name</div>
          </label>
          <label>
            <input type="email" name="email" id="email" required />
            <div className="label-text">Email</div>
          </label>
          <label>
            <input type="tel" name="phone" id="phone" required />
            <div className="label-text">Phone Number</div>
          </label>
          <button
            type="submit"
            value="Submit"
            onClick={(e) => e.preventDefault}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Signup;
