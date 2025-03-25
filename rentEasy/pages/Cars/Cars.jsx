import React from "react";
import data from "../data.js";
import { Link, useSearchParams } from "react-router";
export default function Cars() {
  const [cars, setCars] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const displayedCars = typeFilter
    ? cars.filter((car) => car.type == typeFilter)
    : cars;

  React.useEffect(() => {
    setCars(data);
    console.log(cars);
  }, []);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const carsEl = displayedCars.map((car) => {
    let typeClass;

    if (car.type == "luxury") {
      typeClass = "car-type luxury";
    } else if (car.type == "simple") {
      typeClass = "car-type simple";
    } else {
      typeClass = "car-type economy";
    }

    return (
      <div className="car-div" key={car.id}>
        <Link to={`/cars/${car.id}`}>
          <div className="image-div">
            <img src={car.imageUrl}></img>
          </div>
          <div className="car-info">
            <p className="car-name">{car.name}</p>
            <div className="car-price-div">
              <p className="car-price">₹{car.price}</p>
              <p className="day-p">/day</p>
            </div>
          </div>
          <div className={typeClass}>{car.type}</div>
        </Link>
      </div>
    );
  });

  return (
    <div className="cars-container">
      <h1>Explore our Car options</h1>
      <div className="car-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`car-list-type simple ${
            typeFilter == "simple" ? "selected" : null
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`car-list-type luxury ${
            typeFilter == "luxury" ? "selected" : null
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "economy")}
          className={`car-list-type economy ${
            typeFilter == "economy" ? "selected" : null
          }`}
        >
          Economy
        </button>
        {typeFilter != null && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="clear-filters"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="cars-list-div">{carsEl}</div>
    </div>
  );
}
