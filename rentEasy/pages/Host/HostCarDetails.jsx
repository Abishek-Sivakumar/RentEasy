import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router";
import data from "../data";

export default function HostCarDetails() {
  const params = useParams();

  const [currentCar, setCurrentCar] = React.useState({});

  React.useEffect(() => {
    const hostCar = data.find((car) => car.id == params.id);
    setCurrentCar(hostCar);
  }, []);

  console.log(currentCar);

  let typeClass;

  if (currentCar.type == "luxury") {
    typeClass = "car-type luxury";
  } else if (currentCar.type == "simple") {
    typeClass = "car-type simple";
  } else {
    typeClass = "car-type economy";
  }

  let activeStyle = {
    fontWeight: "bolder",
    textDecoration: "underline",
    color: "#161616",
  };

  if (!currentCar) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-car-detail-layout-container">
        <div className="host-car-detail">
          <img src={currentCar.imageUrl} />
          <div className="host-car-detail-info-text">
            <div className={typeClass}>{currentCar.type}</div>
            <h3>{currentCar.name}</h3>
            <h4>₹{currentCar.price}/day</h4>
          </div>
        </div>
        <nav className="host-car-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </section>
  );
}
