import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="mb-10">
      <div className="m-10">
        <p className="text-center text-secondary text-xl font-medium font-sans uppercase">
          our services
        </p>
        <h2 className="text-center text-3xl font-normal text-gray-500">Service We Provide</h2>
      </div>
      <div className="md:flex sm:block gap-4 px-10">
        <ServiceCard image={fluoride} name="Fluoride treatment"></ServiceCard>
        <ServiceCard image={cavity} name="Cavity filling"></ServiceCard>
        <ServiceCard image={whitening} name="Teeth whitening"></ServiceCard>
      </div>
    </div>
  );
};

export default Service;
