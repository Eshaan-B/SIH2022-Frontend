import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <div className="navbar">
        <button>User Details</button>
        <button>Track Application</button>
      </div>
      <div className="userDetails">
        <ul>
          <li>
            <span>Name</span>
            <span>{" First Name " + " Last Name"}</span>
          </li>
          <li>
            <span>Aadhar Number</span>
            <span>{" First 4 digits of aadhar then xxxx"}</span>
          </li>
        </ul>
      </div>
      <div className="tracking"></div>
    </div>
  );
}

export default Dashboard;
