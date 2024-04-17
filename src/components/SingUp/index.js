import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function SingUp() {
  const [name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  const onClickSignUp = (event) => {
    event.preventDefault();
    if (Username !== "" && Password === Repassword) {
      localStorage.setItem("username", Username);
      localStorage.setItem("password", Password);
      navigate("/login");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-cart">
        <h2>SignUp</h2>
        <div className="input-container">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="username">
            Username
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
        <div className="input-container">
          <label className="label" htmlFor="Re-password">
            Re enter Password
          </label>
          <input
            className="input"
            id="Re-password"
            type="text"
            placeholder="Re Enter Your Password"
            onChange={(e) => setRepassword(e.target.value)}
            value={Repassword}
          />
        </div>
        <p className="error-msg"></p>
        <div className="button-container">
          <button
            type="submit"
            className="login-button"
            onClick={onClickSignUp}
            required
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
export default SingUp;
