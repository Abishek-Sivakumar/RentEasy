import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
