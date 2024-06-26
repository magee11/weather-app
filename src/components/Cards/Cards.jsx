import React from "react";
import "./cards.css";
import { windStatus } from "../../assets/assets";

const Cards = ({title,img}) => {
  return (
    <div className="cards">
      <span className="title">{title}</span>
      <img src={img} />
      <div className="cards-detials">
        <span>7.50 km/h</span>
        <span>6.20 AM</span>
      </div>
    </div>
  );
};

export default Cards;
