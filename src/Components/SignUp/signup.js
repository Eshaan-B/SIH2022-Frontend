import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const orgs = ["Tamil Nadu", "Odisha", "Odisha Hockey", "TN Basketball"];
  const ulEl = document.createElement("ul");
  function showOrg(org) {
    const html = ulEl.innerHTML;
    ulEl.innerHTML = `
        ${html}
        <li>${org}</li>
    `;
  }

  function showOrgs(e) {
    // console.log(e.target.value);
    const newOrg = orgs.filter((org) => org.includes(e.target.value));
    const listEl = document.querySelector(".list");
    listEl.innerHTML = ``;

    if (newOrg.length > 0) {
      console.log(newOrg);
      //   const elem = newOrg.forEach((org) => )
    }
    ulEl.innerHTML = `
        ${
          newOrg.length > 0
            ? newOrg.forEach((org) => showOrg(org))
            : "<button>Add Your Org</button>"
        }
    `;
    console.log(ulEl.innerHTML);

    listEl.appendChild(ulEl);
    // console.log(newOrg);
  }
  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form>
        <input
          type="text"
          autoComplete="off"
          name=""
          id=""
          placeholder="First Name"
          required
        />
        <input
          type="text"
          autoComplete="off"
          name=""
          id=""
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          autoComplete="off"
          placeholder="Organisation Email Id"
          required
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="Password"
          required
        />
        <input
          type="text"
          autoComplete="off"
          placeholder="Aadhar Number"
          required
        />
        <input
          type="text"
          autoComplete="off"
          placeholder="Organisation Name"
          required
          onChange={(e) => showOrgs(e)}
        />

        <button>SignUp</button>
      </form>

      <div className="list"></div>

      <Link to={"/login"}>
        <span>Log In instead?</span>
      </Link>
    </div>
  );
}

export default SignUp;
