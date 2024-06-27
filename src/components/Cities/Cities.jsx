import React from "react";
import "./cities.css";
const Cities = ({ country, city, climate,temperature }) => {
  return (
    <div className="cities">
      <div className="places">
        <p className="country">{country}</p>
        <p className="city">{city}</p>
      </div>
      <div className="place-details">
        <p>{temperature}°c</p>
        <img src={climate}  />
      </div>
    </div>
  );
};

export default Cities;
