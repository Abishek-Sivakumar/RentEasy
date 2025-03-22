import { useState } from "react";
import reactLogo from "./assets/react.svg";
import siteLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";

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
        <Route path="/cars" element={<Cars />}></Route>
      </Routes>
      <footer>Ⓒ Made by Abishek #RentEasy</footer>
    </BrowserRouter>
  );
}

export default App;
