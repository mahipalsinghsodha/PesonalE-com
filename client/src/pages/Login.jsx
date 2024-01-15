import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "../styles/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEvent = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login-sec">
        <div className="login-card">
          <div className="profile-icon">
            <img src="demi.jpg" alt="" />
          </div>
          <form onSubmit={handleEvent}>
            <div className="mb-3 d-flex flex-row align-items-center  border-2 border-bottom border-white">
              <EmailIcon style={{ color: "white" }} />
              <input
                type="email"
                className="form-control border-0 bg-transparent custom-css"
                id="exampleInputEmail1"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 d-flex flex-row align-items-center border-2 border-bottom border-white">
              <LockOpenIcon style={{ color: "white" }} />
              <input
                type="password"
                className="form-control border-0 bg-transparent custom-css"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn bg-primary w-100" type="submit">
                Login
              </button>
            </div>
          </form>

          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
