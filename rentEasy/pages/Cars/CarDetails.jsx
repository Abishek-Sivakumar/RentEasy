import React, { use } from "react";
import { Link, useParams } from "react-router";
import cars from "../data.js";

export default function CarDetails() {
  const params = useParams();
  const [car, setcar] = React.useState();

  React.useEffect(() => {
    cars.map((mycar) => {
      if (mycar.id == params.id) {
        setcar(mycar);
        console.log(mycar);
      }
    });
  }, []);

  let typeClass;
  if (car) {
    if (car.type == "luxury") {
      typeClass = "car-type luxury";
    } else if (car.type == "simple") {
      typeClass = "car-type simple";
    } else {
      typeClass = "car-type economy";
    }
  }

  return (
    <>
      <Link to="/cars" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="car-detail-container">
        {car ? (
          <>
            <div className="car-detail-img-div">
              <img src={car.imageUrl} className="car-detail-img" />
            </div>
            <div className="car-detail-primary">
              <div className={car ? `car-type ${car.type}` : null}>
                {car.type}
              </div>
              <h1>{car.name}</h1>
              <p>
                <span>₹{car.price}</span>/Day
              </p>
              <p className="car-detail-description">{car.description}</p>
              <Link to="/cars">Rent this Car</Link>
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}
