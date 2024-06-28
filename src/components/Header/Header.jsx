import React, { useContext } from "react";
import "./header.css";
import {
  dashboard,
  notification,
  geoPin,
  search,
  darkMode,
} from "../../assets/assets.js";
import Search from "../Search/Search.jsx";
import { WeatherContext } from "../../context/StoreContext.jsx";
const notification_icon = notification;
const Header = ({ setNotification, notification }) => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="header">
      <div className="header-left">
        <img src={geoPin} className="geopin" alt="" />
        {weatherData && <span className="location">{weatherData?.name}</span>}
      </div>
      <div className="header-center">
        <Search />
      </div>
      <div className="header-right">
        <img src={dashboard} alt="" className="theme" />
        <img
          src={notification_icon}
          onClick={() => setNotification(!notification)}
          alt=""
          className="profile"
        />
      </div>
    </div>
  );
};

export default Header;
