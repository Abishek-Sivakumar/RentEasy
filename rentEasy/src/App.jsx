import { useState } from "react";
import reactLogo from "./assets/react.svg";
import siteLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars/Cars";
import CarDetails from "../pages/Cars/CarDetails";
import Layout from "../src/components/Layout";
import HostLayout from "../src/components/HostLayout";
import Dashboard from "../pages/Host/Dashboard";
import Reviews from "../pages/Host/Reviews";
import Income from "../pages/Host/Income";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cars" element={<Cars />}></Route>
          <Route path="cars/:id" element={<CarDetails />}></Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
