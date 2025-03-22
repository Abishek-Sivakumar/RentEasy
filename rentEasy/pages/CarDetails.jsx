import React, { use } from "react";
import { Link, useParams } from "react-router";
import cars from "./data.js";

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

  return (
    <div className="about-container">
      {car ? (
        <>
          <Link to="/cars">&larrBack to Cars</Link>
          <img src={car.imageUrl} />
          <div className="about-primary">
            <h2>
              Don’t squeeze in a two-wheeler when you could relax in a car.
            </h2>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
