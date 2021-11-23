import React from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";
export default function LoginForm() {
  //   const prevent = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <div className="loginForm">
      <h1>Login Details </h1>
      <div className="form">
        <div>Enter Username </div>
        <input type="text" name="username" required />
        <div>Enter password </div>
        <input type="password" name="password" id="password" required />
        {/* <br /> */}
        <Link to="./">
          {" "}
          <button>Login </button>{" "}
        </Link>
      </div>
    </div>
  );
}
