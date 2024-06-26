import React from "react";
import "./citycards.css";


const CityCards = ({ day, img, temp }) => {
  return (
    <div className="citycards">
      <div className="days">
        <span>{day}</span>
      </div>
      <div className="climate">
        <img src={img} />
      </div>
      <div className="temp">
        <span>{temp}</span>
      </div>
    </div>
  );
};

export default CityCards;
