import React, { useContext, useState, useEffect } from "react";
import "./othercities.css";
import Cards from "../Cards/Cards";
import ExploreCards from "../ExploreCards/ExploreCards";
import Cities from "../Cities/Cities";
import { UVCircle, humidity, windIcon, windStatus } from "../../assets/assets";
import { WeatherContext } from "../../context/StoreContext";
import { otherCities } from "../../utils/utils";

const OtherCities = () => {
  const { weatherData } = useContext(WeatherContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardsList = [
    {
      title: "Wind Status",
      img: windStatus,
      des1: `${weatherData?.wind?.speed ?? 0} km/h`,
      des2: "6.20 AM",
    },
    {
      title: "UV Index",
      img: UVCircle,
      des1: `${weatherData?.wind?.gust ?? 0} UV`,
      des2: "",
    },
    {
      title: "Visibility",
      img: humidity,
      des1: `${weatherData?.main?.feels_like ?? 0} km`,
      des2: " Dew Point",
    },
    {
      title: "Humidity",
      img: windIcon,
      des1: `${weatherData?.main?.humidity ?? 0}%`,
      des2: "Haze is affecting",
    },
  ];

  function getRandomCities(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const randomCities = getRandomCities(otherCities, 3);

  return (
    <div className="othercities">
      <div className="card-items">
        {cardsList.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            img={item.img}
            des1={item.des1}
            des2={item.des2}
          />
        ))}
      </div>
      {width > 1600 && (
        <div className="explore-cards">
          <ExploreCards />
        </div>
      )}
      <div className="other-cities">
        {randomCities.map((item, index) => (
          <Cities
            key={index}
            country={item.country}
            climate={item.climate}
            temperature={item.temperature}
            city={item.city}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherCities;
