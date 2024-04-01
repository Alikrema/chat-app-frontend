import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "./InputField";
import Loader from "./Loader";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authStatus = useSelector((state) => state.auth.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <InputField
        type="email"
        id="email"
        label="Email"
        value={email}
        onChange={setEmail}
      />
      <InputField
        type="password"
        id="password"
        label="Password"
        value={password}
        onChange={setPassword}
      />
      <button
        type="submit"
        disabled={authStatus === "loading"}
        className="loginButton"
      >
        {authStatus === "loading" ? <Loader /> : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
