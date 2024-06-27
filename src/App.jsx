import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WeeklyStatus from "./components/WeeklyStatus/WeeklyStatus";
import OtherCities from "./components/OtherCities/OtherCities";
import WeatherContextProvider from "./context/StoreContext.jsx";
import MobileView from "./components/MobileView/MobileView.jsx";
import LoadingScreen from "./components/Loading/Loading.jsx";

function App() {
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

  return (
    <div className="app">
      <WeatherContextProvider>
        <LoadingScreen />
        <Header />
        {width <= 950 && <MobileView />}
        <WeeklyStatus />
        <OtherCities />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
