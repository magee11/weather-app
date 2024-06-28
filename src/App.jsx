import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WeeklyStatus from "./components/WeeklyStatus/WeeklyStatus";
import OtherCities from "./components/OtherCities/OtherCities";
import WeatherContextProvider from "./context/StoreContext.jsx";
import MobileView from "./components/MobileView/MobileView.jsx";
import LoadingScreen from "./components/Loading/Loading.jsx";
import Notification from "./components/Notification/Notification.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app">
      <ToastContainer />
      <WeatherContextProvider>
        <LoadingScreen />
        {notification && (
          <Notification
            setNotification={setNotification}
            notification={notification}
          />
        )}
        <Header setNotification={setNotification} notification={notification} />
        {width <= 650 && (
          <MobileView
            setNotification={setNotification}
            notification={notification}
          />
        )}
        <WeeklyStatus />
        <OtherCities />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
