import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <Link to="/" className="site-logo">
        ⛐RentEasy
      </Link>
      <nav className="header-nav">
        <Link to="/cars">Cars</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
