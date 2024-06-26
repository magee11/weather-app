import React from "react";
import "./cities.css";
const Cities = ({ country, city, climate }) => {
  return (
    <div className="cities">
      <div className="places">
        <span className="country">{country}</span>
        <span className="city">{city}</span>
        <span className="climate">{city}</span>
      </div>
      <div className="place-details">
        <img src={climate} alt="" />
      </div>
    </div>
  );
};

export default Cities;
