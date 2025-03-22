import { useState } from "react";
import reactLogo from "./assets/react.svg";
import siteLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="site-logo">
          ⛐RentEasy
        </Link>
        <nav className="header-nav">
          <Link to="/cars">Cars</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
