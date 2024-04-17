import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import "./index.css";

function Header() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  const onClickLogout = () => {
    setLogout(!logout);
  };
  const Popup = () => {
    return (
      <div className="popup-card">
        <div className="popup">
          <h3>Username</h3>
          <p>******</p>
          <h3>Password</h3>
          <p>*******</p>
          <button type="button" onClick={clickLogout}>
            logout
          </button>
        </div>
      </div>
    );
  };
  const clickLogout = () => {
    navigate("/");
  };

  return (
    <nav className="nav-bar-container">
      <h2>Dashboard</h2>
      <div className="cart-items-container">
        <button type="submit">
          <IoMdMenu />
        </button>
        <FaUserCircle />
      </div>
    </nav>
  );
}
export default Header;
