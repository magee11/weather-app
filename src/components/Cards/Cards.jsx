import React from "react";
import "./cards.css";

const Cards = ({title,img,des1,des2}) => {
  return (
    <div className="cards">
      <span className="title">{title}</span>
      <img src={img} />
      <div className="cards-detials">
        <span>{des1}</span>
        {des2&&<span>{des2}</span>}
      </div>
    </div>
  );
};

export default Cards;
