import React from "react";
import "./Progress.css";

function Progress() {
  return (
    <div className="progressbar__wrapper">
      <h1> Animated progress bar with steps</h1>
      <ul className="progressbar" id="progressbar">
        <li>
          <span className="progressbar__circle">
            <span className="bottom">STEP 1</span>
          </span>
        </li>
        <li>
          <span className="progressbar__circle">
            <span className="bottom">STEP 2</span>
          </span>
        </li>
        <li>
          <span className="progressbar__circle">
            <span className="bottom">STEP 3</span>
          </span>
        </li>
        <li>
          <span className="progressbar__circle">
            <span className="bottom">STEP 4</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Progress;
