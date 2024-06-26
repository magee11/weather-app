import React, { useContext } from "react";
import "./mobileview.css";
import { cloudySun, thunderCloud, rainy } from "../../assets/assets";
import { WeatherContext } from "../../context/StoreContext.jsx";

const weeklydetials = [
  { img: thunderCloud, text: "Today ThunderStorm", temp: "28°/21°" },
  { img: rainy, text: "Tomorrow Rain", temp: "27°/21°" },
  { img: cloudySun, text: "Thu Cloudy", temp: "26°/21°" },
];

const formatTime = (timestamp) => {
  if (!timestamp) return "00:00";
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
const MobileView = () => {
  const { weatherData } = useContext(WeatherContext);
  const defaultSunrise = weatherData
    ? formatTime(weatherData.sys.sunrise)
    : "00:00";
  const defaultSunset = weatherData
    ? formatTime(weatherData.sys.sunset)
    : "00:00";
  return (
    <div className="mobileview">
      <p className="temperature">
        {weatherData ? weatherData?.main?.temp : 0}
        <sup>°c</sup>
      </p>
      <span className="climate-details">
        {weatherData ? weatherData?.weather.main : "Cloudy"} 28<sup>°</sup>/21
        <sup>°</sup>
      </span>
      <p>{weatherData?.name}</p>
      <div className="mobile-center-content">
        <div className="details-header">
          <p>5-day Forecast</p>
          <p>More Detaisl</p>
        </div>
        {weeklydetials.map((item) => (
          <div className="weeklydetials" key={item.text}>
            <div className="weeklydetials-left">
              <img src={item.img} alt="" />
              <p>{item.text}</p>
            </div>
            <div className="weeklydetials-right">
              <p>{item.temp}</p>
            </div>
          </div>
        ))}
        <button> 5-days Forecast </button>
      </div>

      <div className="mobile-cards">
        <div className="mobile-cards-left">
          <div className="mobile-cards-top">
            <p>Wind Direction : West</p>
            <p>
              Wind speed : {weatherData ? weatherData?.wind.speed : "0"}km/h
            </p>
          </div>
          <div className="mobile-cards-bottom">
            <p>Sunrise : {defaultSunrise}</p>
            <p>Sunset : {defaultSunset}</p>
          </div>
        </div>
        <div className="mobile-cards-right">
          <div>
            <p>Humidity</p>
            <p>Real feel</p>
            <p>UV</p>
            <p>Pressure</p>
            <p>chance of rain</p>
          </div>
          <div>
            <b>
              <p>{weatherData ? weatherData?.main.humidity : "0"}</p>
            </b>
            <b>
              <p>{weatherData ? weatherData?.main.feels_like : "0"}</p>
            </b>
            <b>
              <p>{weatherData ? weatherData?.wind.gust : "0"}</p>
            </b>
            <b>
              <p>{weatherData ? weatherData?.main.pressure : "0"}</p>
            </b>
            <b>
              <p>{weatherData ? weatherData?.main.humidity : "0"}</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
