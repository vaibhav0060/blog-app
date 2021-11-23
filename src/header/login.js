import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
export default function Login() {
  let [state, setstate] = useState(false);
  const loginform = () => {
    setstate((state = !state));
    return (
      <div>
        <LoginForm />
      </div>
    );
  };
  return (
    <div className="login">
      {state ? (
        <p onClick={() => setstate((state = !state))}> SIgn Out </p>
      ) : (
        <p onClick={loginform}> Sign In</p>
      )}
    </div>
  );
}
