import React, { useContext } from "react";
import "./weeklystatus.css";
import Today from "../Today/Today";
import CityCards from "../CityCards/CityCards";
import { sunny, rainy, cloudySun } from "../../assets/assets";
import { WeatherContext } from "../../context/StoreContext";

const WeeklyStatus = () => {
  const { weatherData } = useContext(WeatherContext);

  function generateRandomTemps(numDays, minTemp) {
    const temps = [];
    for (let i = 0; i < numDays; i++) {
      let temp = Math.floor(Math.random() * 15) + minTemp;
      if (temp >= 25) {
        temp = Math.floor(Math.random() * 5) + 25;
      }
      const shift = Math.floor(Math.random() * 5) - 2;
      temp += shift;
      temps.push(temp);
    }
    return temps;
  }

  function generateDaysList(numDays) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date().getDay();
    const startTemp = weatherData?.main?.temp || 32;
    const temps = generateRandomTemps(numDays, startTemp);

    const daysList = [];
    for (let i = 0; i < numDays; i++) {
      let img;
      if (temps[i] < 25) {
        img = rainy;
      } else if (temps[i] > 30) {
        img = sunny;
      } else {
        img = cloudySun;
      }

      const dayData = {
        day: daysOfWeek[(today + i + 1) % 7],
        img: img,
        temp: `${temps[i]}°C`,
      };
      daysList.push(dayData);
    }
    return daysList;
  }

  const numDays = 6; 
  const daysList = generateDaysList(numDays);

  return (
    <div className="weeklystatus">
      <Today />
      {daysList.map((item) => (
        <CityCards
          key={item.day}
          day={item.day}
          img={item.img}
          temp={item.temp}
        />
      ))}
    </div>
  );
};

export default WeeklyStatus;
