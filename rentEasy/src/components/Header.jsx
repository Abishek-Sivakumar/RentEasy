import React from "react";
import userImage from "../assets/avatar.png";
import { Link, NavLink } from "react-router";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link to="/" className="site-logo">
        ⛐RentEasy
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/host"
          style={({ isActive }) => {
            return isActive ? activeStyle : null;
          }}
        >
          Host
        </NavLink>
        <NavLink
          to="/cars"
          style={({ isActive }) => {
            return isActive ? activeStyle : null;
          }}
        >
          Cars
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return isActive ? activeStyle : null;
          }}
        >
          About
        </NavLink>
        <Link to="login" className="login-link">
          <img src={userImage} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
