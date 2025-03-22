import React from "react";
import { Link } from "react-router";
import cartravel from "../src/assets/cartravel.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <img src={cartravel} />
      <div className="about-primary">
        <h2>Don’t squeeze in a two-wheeler when you could relax in a car.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-secondary">
          <p>Your destination is waiting. Your car is ready.</p>
          <Link to="/cars" className="about-container-link">
            Explore our cars
          </Link>
        </div>
      </div>
    </div>
  );
}
