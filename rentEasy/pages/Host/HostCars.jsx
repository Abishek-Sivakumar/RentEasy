import React from "react";
import data from "../data.js";
import { Link } from "react-router";

export default function HostVans() {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    const currentCars = data.filter((car) => car.hostId == 123);
    setCars(currentCars);
  }, []);

  console.log(cars);

  const carsEl = cars.map((car) => {
    return (
      <Link to={car.id} key={car.id} className="host-car-link-wrapper">
        <div className="host-car-list-single" key={car.id}>
          <img src={car.imageUrl} alt={`Photo of ${car.name}`} />
          <div className="host-van-info">
            <h3>{car.name}</h3>
            <p>₹{car.price}/day</p>
            <div className={car ? `car-type ${car.type}` : null}>
              {car.type}
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="host-cars-section">
      <h1 className="host-cars-title"> Your Listed Cars</h1>
      <div className="host-cars-list">
        {cars.length > 0 ? carsEl : <h1>Loading...</h1>}
      </div>
    </section>
  );
}
