import React from "react";
import data from "./data.js";
import { Link } from "react-router";
export default function Cars() {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    setCars(data);
    console.log(cars);
  }, []);

  const carsEl = cars.map((car) => {
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
      {/* <div className="cars-header">

      </div> */}
      <div className="cars-list-div">{carsEl}</div>
    </div>
  );
}
