import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [searchString, setSearchString] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const contextValue = {
    searchString,
    setSearchString,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
