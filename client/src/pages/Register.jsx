import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div>
        <h2>Register Page</h2>
        {/* Your registration form goes here */}
        <Link to="/login">Back to Login</Link>
      </div>
    </>
  );
};

export default Register;