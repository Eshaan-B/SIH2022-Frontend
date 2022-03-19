import React from "react";
import "./Signup.css";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Webcam from "react-webcam";

function Signup() {
  let navigate = useNavigate();
  function showImg() {
    setShowImage(!showImage);
  }
  const [showImage, setShowImage] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("M");
  const [location, setLocation] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [govtBody, setgovtBody] = useState("");

  function selectNum() {
    var strUser = document.getElementById("gender-select").value;
    setGender(strUser);
  }

  function send() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: name,
        loginEmail: email,
        loginPass: password,
        phoneNumber: phone,
        age: age,
        gender: gender,
        location: location,
        aadhar: aadhar,
        pan: pan,
        govtBody: govtBody,
      }),
    };
    // fetch("http://192.168.195.84:8000/api/users/signup", requestOptions).then(
    //   (response) => {
    //     const resp = response.json();
    //     console.log(resp);
    //     navigate("/");
    //   }
    // );
    axios
      .post("http://192.168.195.84:8000/api/users/signup", requestOptions)
      .then((response) => console.log(response.data))
      .then(navigate("/"));
  }
  return (
    <div className="middle-con">
      <div className="signup-contianer">
        <form className="form-for-signup" onSubmit={(e) => e.preventDefault()}>
          <div className="name-cont">
            <span>Full Name</span>
            <input
              type="text"
              name="name"
              id="name-input"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="pass-cont">
            <span>Password</span>
            <input
              type="password"
              name="pass"
              id="pass-input"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="phone">
            <span>Phone Number</span>
            <input
              type="phone"
              name="phone"
              id="phone-input"
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="age">
            <span>Age</span>
            <input
              type="text"
              name="age"
              id="age-input"
              autoComplete="off"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="gender">
            <label for="gender"> Select you gender</label>
            <select name="gender" id="gender-select" onChange={selectNum}>
              <option value="none" selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="state">
            <span>State</span>
            <input
              type="text"
              name="state"
              id="state-input"
              autoComplete="off"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="org">
            <span>Organisation Email</span>
            <input
              type="text"
              name="org-name"
              id="org-input"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="docs">
            <div className="aadhar">
              <span>Aadhar Number</span>
              <input
                type="text"
                name="aadhar"
                id="aadhar-input"
                autoComplete="off"
                onChange={(e) => setAadhar(e.target.value)}
              />
            </div>
            <div className="govt-body">
              <span>Government Body</span>
              <input
                type="text"
                name="govt-body"
                id="govt-body-input"
                autoComplete="off"
                onChange={(e) => setgovtBody(e.target.value)}
              />
            </div>
            <div className="pan">
              <span>Pan Number</span>
              <input
                type="text"
                name="pan"
                id="pan-input"
                autoComplete="off"
                onChange={(e) => setPan(e.target.value)}
              />
            </div>
          </div>
          <div className="pic-cont">
            <div className="pic">
              <label> Upload your photo</label>
              {/* <input
                type="file"
                id="imageFile"
                capture="user"
                accept="image/*"
                autoComplete="off"
              />  */}
              <button onClick={showImg}>
                <i className="fa-solid fa-camera" />
              </button>
            </div>
            <div className="a-img">
              <label for="aadhar-image"> Upload your Aadhar Image</label>
              <input
                type="file"
                id="aadharFile"
                capture="user"
                accept="image/*"
                autoComplete="off"
              />
            </div>
          </div>
          <button onClick={send} className="sign-btn">
            SignUp
          </button>
        </form>
        <div className="camera-inp">
          {showImage ? <WEBCAMERA hide={showImg} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Signup;

function WEBCAMERA({ hide }) {
  const videoConstraints = {
    facingMode: "user",
  };
  function capture() {
    hide();
    setImg(webRef.current.getScreenshot());
    // console.log(webRef.current.getScreenshot());
  }

  const webRef = useRef(null);
  const [img, setImg] = useState(null);
  return (
    <div className="webcam">
      <Webcam ref={webRef} height={300} width={600} />
      <button onClick={capture}>Capture</button>
    </div>
  );
}
