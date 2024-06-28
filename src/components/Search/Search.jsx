import React, { useContext, useEffect, useState } from "react";
import { search } from "../../assets/assets.js";
import "./search.css";
import { WeatherContext } from "../../context/StoreContext.jsx";
import { getWeather } from "../../api/Weather.jsx";

const Search = () => {
  const { searchString, setWeatherData, setSearchString } = useContext(WeatherContext);
  const [error, setError] = useState(null);
  const [string, setString] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchString(string);
  };

  const fetchSuggestions = async (input) => {
    try {
      const response = await fetch(`https://api.example.com/suggestions?query=${string}`);
      const data = await response.json();
      setSuggestions(data.suggestions); 
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

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

  useEffect(() => {
    const fetchWeatherByLocation = async (lat, lng) => {
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        const data = await response.json();
        setSearchString(data.city || "Unknown location");
      } catch (error) {
        setError(error.message);
      }
    };

    if (location.lat && location.lng) {
      fetchWeatherByLocation(location.lat, location.lng);
    }
  }, [location, setSearchString]);

  return (
    <div className="search">
      <img src={search} alt="search icon" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={string}
          onChange={(e) => {
            setString(e.target.value);
            fetchSuggestions(e.target.value); // Fetch suggestions on input change
          }}
        />
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
