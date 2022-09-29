import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h2>Stay Healthy</h2>
    </div>
  );
};

export default Header;
