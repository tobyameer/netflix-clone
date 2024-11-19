import React, { useState, useContext } from "react";
import { login } from "../../context/authContext/apiCalls";
import "./Login.css";
import { AuthContext } from "../../context/authContext/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginBtn" onClick={handleLogin} disable={isFetching}>
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
