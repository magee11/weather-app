import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WeeklyStatus from "./components/WeeklyStatus/WeeklyStatus";
import OtherCities from "./components/OtherCities/OtherCities";
import WeatherContextProvider from "./context/StoreContext.jsx";
import MobileView from "./components/MobileView/MobileView.jsx";

function App() {
const width = window.innerWidth;
console.log(width,"Width");
  return (
    <div className="app">
      <WeatherContextProvider>
        <Header />
        {width<=950&&<MobileView/>}
        <WeeklyStatus />
        <OtherCities />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
