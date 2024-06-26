import React, { useContext } from "react";
import "./today.css";
import { sunny,cloudySun } from "../../assets/assets.js";
import { WeatherContext } from "../../context/StoreContext.jsx";

const Today = () => {
  const { weatherData } = useContext(WeatherContext);

  const formatTime = (timestamp) => {
    if (!timestamp) return "00:00";
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getCurrentTime = () => {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    const currentTime = hours + ":" + minutes + " " + ampm;

    return currentTime;
  };

  const isDayOrNight = (currentTime, sunriseTime, sunsetTime) => {
    return currentTime >= sunriseTime && currentTime < sunsetTime
      ? "day"
      : "night";
  };

  const defaultTemp = weatherData ? `${weatherData.main.temp}°C` : "28°C";
  const defaultFeelsLike = weatherData ? weatherData.main.feels_like : "0";
  const defaultWindSpeed = weatherData ? weatherData.wind.speed : "0";
  const defaultPressure = weatherData ? weatherData.main.pressure : "0";
  const defaultHumidity = weatherData ? weatherData.main.humidity : "0";
  const defaultSunrise = weatherData
    ? formatTime(weatherData.sys.sunrise)
    : "00:00";
  const defaultSunset = weatherData
    ? formatTime(weatherData.sys.sunset)
    : "00:00";

  const currentTime = new Date(
    weatherData?.dt * 1000 + (weatherData?.timezone || 0) * 1000
  );
  const sunriseTime = new Date(
    weatherData?.sys?.sunrise * 1000 + (weatherData?.timezone || 0) * 1000
  );
  const sunsetTime = new Date(
    weatherData?.sys?.sunset * 1000 + (weatherData?.timezone || 0) * 1000
  );

  const dayOrNight = isDayOrNight(currentTime, sunriseTime, sunsetTime);

  const currentDate = new Date();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = weekdays[currentDate.getDay()];
  const timeNow = getCurrentTime();

  return (
    <div className="today">
      <div className="today-top">
        <span>{dayOfWeek}</span>
        <span>{timeNow}</span>
      </div>
      <div className="today-bottom">
        <div className="temp-details">
          <span className="temp">{defaultTemp}</span>
          <img src={cloudySun} alt="Weather Icon" />
        </div>
        <div className="bottom-details">
          <div className="bottom-left">
            <span>
              Real Feel <b>{defaultFeelsLike}</b>
            </span>
            <span>
              Wind N-E. <b>{defaultWindSpeed}</b>
            </span>
            <span>
              Pressure <b>{defaultPressure}</b>
            </span>
            <span>
              Humidity <b>{defaultHumidity}</b>
            </span>
          </div>
          <div className="bottom-left">
            <span>
              Sunrise <b>{defaultSunrise}</b>
            </span>
            <span>
              Sunset <b>{defaultSunset}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
