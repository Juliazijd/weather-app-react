import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

import "./Weather.css";

export default function SearchEngine() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      description: response.data.weather.description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
      let apiKey = "427b64eee1edb35b88796269421b55f1";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(displayWeather);
  }

  function updateSubmit(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-4">
            <input
              type="search"
              placeholder="Enter any city..."
              className="search-input w-100"
              autocomplete={false}
              autofocus={true}
              onChange={updateSubmit}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="submit-button" />
          </div>
          <div className="col-5">
            <input
              type="submit"
              value="Check current location"
              className="button-search-current"
            />
          </div>
        </div>
      </form>
      <div className="city-and-time row">
        <div className="col-6">
          <h3 className="city-header">
            <strong>{weather.city}</strong>
          </h3>
        </div>
        <div className="col-6">
          <div className="last-updated-time">
            <div className="current-time">Friyay 14:00</div>
            <div className="text-last-updated">(last updated)</div>
          </div>
        </div>
      </div>
      <div className="CurrentWeather row">
        <div className="col-4 current-weather">
          <h4 className="description">{weather.description}</h4>
          <span><img src={weather.icon} alt={weather.description}/></span>
          <span>
            <strong className="current-temp">
              {Math.round(weather.temperature)}
            </strong>
            <span className="units">
              <a href="/" className="active">
                °C{" "}
              </a>{" "}
              | <a href="/">°F </a>
            </span>
          </span>
        </div>
        <div className="col-8">
          <ul className="current-conditions">
            <li>Feels like: {Math.round(weather.feelslike)}°C</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Windspeed: {Math.round(weather.windspeed * 1.852)}km/h</li>
          </ul>
        </div>
        
      </div>
      <Forecast />
    </div>
  );

}
