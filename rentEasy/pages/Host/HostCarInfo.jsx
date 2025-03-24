import React from "react";
import { useOutletContext } from "react-router";

const HostCarInfo = () => {
  const { currentCar } = useOutletContext();

  return (
    <section className="host-car-detail-info">
      <h4>
        Name: <span>{currentCar.name}</span>
      </h4>
      <h4>
        Category: <span className="host-car-info-type">{currentCar.type}</span>
      </h4>
      <h4>
        Description: <span>{currentCar.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
};

export default HostCarInfo;
