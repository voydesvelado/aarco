import React from "react";
import car from "../assets/svg/car.svg";
import heart from "../assets/svg/heart.svg";
import home from "../assets/svg/home.svg";
import sun from "../assets/svg/sun.svg";

const ServicesCard = ({ h1, p, img, svg }) => {
  return (
    <div className="col-12 col-lg-6">
      <div
        className="services__card"
        style={{
          backgroundImage: `linear-gradient(180deg, #3b79ec4f 0%, #2462d2 90%), url(${img})`,
        }}
      >
        <div className="svg__wrap">
          <img src={svg} alt="" />
        </div>
        <h3 className="mb-3">{h1}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
