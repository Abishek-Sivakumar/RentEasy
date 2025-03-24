import React from "react";
import { useOutletContext } from "react-router";

const HostCarPhotos = () => {
  const { currentCar } = useOutletContext();
  return <img src={currentCar.imageUrl} className="host-car-detail-image" />;
};

export default HostCarPhotos;
