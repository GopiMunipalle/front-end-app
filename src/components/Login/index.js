import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onClickLogin = (event) => {
    event.preventDefault();
    const user = localStorage.getItem("username");
    const pass = localStorage.getItem("password");
    if (user === Username && pass === Password) {
      navigate("/home");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-cart">
        <h2>Login</h2>
        <div className="input-container">
          <label className="label" htmlFor="username">
            label
          </label>
          <input
            id="username"
            className="input"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
        </div>
        <p className="error-msg">{error}</p>
        <div className="button-container">
          <button className="login-button" onClick={onClickLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
