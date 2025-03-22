import React from "react";
import { Link } from "react-router";
export default function Home() {
  return (
    <div className="home-container">
      <h1>You got the travel plans, we got the travel cars</h1>
      <p>
        Make roadtrip plans on the go by joining the #RentEasy movement. Rent
        the perfect car to make your perfect road trip
      </p>
      <Link to="/cars">Find you Car</Link>
    </div>
  );
}
