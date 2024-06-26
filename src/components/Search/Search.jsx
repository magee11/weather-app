import React, { useContext, useEffect, useState } from "react";
import { search } from "../../assets/assets.js";
import "./search.css";
import { WeatherContext } from "../../context/StoreContext.jsx";
import { getWeather } from "../../api/Weather.jsx";

const Search = () => {
  const { searchString, setWeatherData, setSearchString } =
    useContext(WeatherContext);
  const [error, setError] = useState(null);
  const [string, setString] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchString(string);
    }
  };
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(searchString);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setWeatherData(null);
      }
    };

    if (searchString) {
      fetchWeather();
    }
  }, [searchString, setWeatherData]);

  return (
    <div className="search">
      <img src={search} alt="search icon" />
      <input
        type="text"
        placeholder="Search"
        value={string}
        onChange={(e) => setString(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
