import React from "react";
import "./othercities.css";
import Cards from "../Cards/Cards";
import ExploreCards from "../ExploreCards/ExploreCards";
import Cities from "../Cities/Cities";
import {
  UVCircle,
  humidity,
  rainy,
  rainySun,
  sunny,
  thunderCloud,
  windIcon,
  windStatus,
} from "../../assets/assets";

const othercities = [
  { country: "China", city: "Beijing", climate: sunny },
  { country: "USA", city: "California", climate: rainy },
  { country: "Dubai", city: "Arab Emirates", climate: thunderCloud },
  { country: "Canada", city: "Charlottetown", climate: rainySun },
];

const cardsList = [
  { title: "Wind Status", img: windStatus, des1: "", des2: "" },
  { title: "UV Indesx", img: UVCircle, des1: "", des2: "" },
  { title: "Visibility", img: humidity, des1: "", des2: "" },
  { title: "Humidity", img: windIcon, des1: "", des2: "" },
];
const OtherCities = () => {
  return (
    <div className="othercities">
      <div className="card-items">
        {cardsList.map((item) => (
          <Cards title={item.title} img={item.img} />
        ))}
      </div>
      <div className="explore-cards">
        <ExploreCards />
      </div>
      <div className="other-cities">
        {othercities.map((item, index) => (
          <Cities
            country={item.country}
            climate={item.climate}
            city={item.city}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherCities;
