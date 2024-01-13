import React from "react";
import Services from "./Services";
import "./ServicesHome.css";

function ServicesHome() {
  return (
    <>
      <h1 id="servicePart">Services</h1>
      <hr className="horiZontal" />
      <div className="servicesHom">
        <div className="serviceComp">
          <Services />
        </div>
      </div>
    </>
  );
}

export default ServicesHome;
