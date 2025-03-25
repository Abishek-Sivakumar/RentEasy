import React, { use } from "react";
import { Link, useParams, useLocation } from "react-router";
import cars from "../data.js";

export default function CarDetails() {
  const params = useParams();
  const location = useLocation();
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

  // {location.state.search ? `${location.state.search.slice(5)}` : `all`}{" "}

  return (
    <>
      <Link
        to={location.state.search ? `..?${location.state.search}` : `..`}
        relative="path"
        className="back-button"
      >
        &larr;{" "}
        <span>
          Back to {location.state.type ? `${location.state.type}` : `all`} vans
        </span>
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
