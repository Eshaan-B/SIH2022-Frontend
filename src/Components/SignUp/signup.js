import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
function SignUp() {
  const orgs = [
    { label: "Tamil Nadu" },
    { label: "Odisha" },
    { label: "Odisha Hockey" },
    { label: "TN Basketball" },
  ];
  return (
    <div className="container">
      {/* <div className="row">
            <div className="col-lg-3 col-md-2">
                
            </div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true" />
                </div>
                <div className="col-lg-12 login-title">
                    ADMIN PANEL
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form>
                            <div class="form-group">
                                <label class="form-control-label">USERNAME</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input type="password" class="form-control" i>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>   */}
    </div>
  );
}

export default SignUp;
