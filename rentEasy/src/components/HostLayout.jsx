import React from "react";
import { NavLink, Outlet } from "react-router";

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => {
            return isActive ? activeStyle : null;
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => {
            return isActive ? activeStyle : null;
          }}
        >
          Income
        </NavLink>
        <NavLink
          to="cars"
          style={({ isActive }) => {
            return isActive ? activeStyle : null;
          }}
        >
          Cars
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => {
            return isActive ? activeStyle : null;
          }}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
