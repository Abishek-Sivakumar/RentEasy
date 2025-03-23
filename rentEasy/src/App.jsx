import { useState } from "react";
import reactLogo from "./assets/react.svg";
import siteLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";
import CarDetails from "../pages/CarDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/cars/:id" element={<CarDetails />}></Route>
        </Route>
      </Routes>
      <footer>Ⓒ Made by Abishek #RentEasy</footer>
    </BrowserRouter>
  );
}

export default App;
