import React, { useContext, useState } from "react";
import "./mobileview.css";
import {
  cloudySun,
  thunderCloud,
  rainy,
  sunset,
  loading,
  fast,
  compass,
  humidity_icon,
  UVCircle,
  close1,
} from "../../assets/assets";
import { WeatherContext } from "../../context/StoreContext.jsx";
import { weatherNotifications } from "../../utils/utils.js";

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

const MobileView = ({ setNotification, notification }) => {
  const { weatherData } = useContext(WeatherContext);
  const [notifications_items, setNotificationsItems] =
    useState(weatherNotifications);

  const removeNotification = (index) => {
    setNotificationsItems(notifications_items.filter((_, i) => i !== index));
  };
  const cardItems = [
    {
      title: "UV",
      value: "Moderate",
      img: UVCircle,
    },
    {
      title: "Humidity",
      value: `${weatherData?.main.humidity}%`,
      img: humidity_icon,
    },
    {
      title: "Real Fell",
      value: `${weatherData?.main.feels_like}%`,
      img: fast,
    },
    {
      title: "West",
      value: `${weatherData?.main.temp}`,
      img: compass,
    },
    {
      title: "Sunset",
      value: "18.49",
      img: sunset,
    },
    {
      title: "Pressure",
      value: `${weatherData?.main.pressure}`,
      img: loading,
    },
  ];
  const defaultSunrise = weatherData
    ? formatTime(weatherData?.sys.sunrise)
    : "00:00";
  const defaultSunset = weatherData
    ? formatTime(weatherData.sys.sunset)
    : "00:00";

  return (
    <>
      <div className="mobileview">
        <div className="temp-content">
          <p className="temperature">
            {weatherData ? weatherData?.main?.temp : 0}
            <sup>°c</sup>
          </p>
          <span className="climate-details">
            {weatherData ? weatherData?.weather[0].main : "Cloudy"} 28
            <sup>°</sup> / 21
            <sup>°</sup>
          </span>
          <p>{weatherData?.name}</p>
        </div>
        <div className="mobile-center-content">
          <div className="details-header">
            <p>5-day Forecast</p>
            <p>More Details</p>
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
          <button>5-days Forecast</button>
        </div>
        <div className="grid-container">
          {cardItems.map((item, index) => (
            <div className="grid-item" key={index}>
              <div>
                <p>{item.title}</p>
                <p>{item.value}</p>
              </div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileView;
