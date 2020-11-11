import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("Amsterdam");
  const [displayCity, setDisplayCity] = useState("Amsterdam");
  // const [weather, setWeather] = useState({});

  let apiKey = "427b64eee1edb35b88796269421b55f1";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  function displayWeather(response) {
    console.log(response.data);
    //  setWeather({
    //      temperature: response.data.main.temp,
    //     feelslike: response.data.main.feels_like,
    //     humidity: response.data.main.humidity,
    //     windspeed: response.data.wind.speed,
    //   });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayCity(city);
  }

  function updateSubmit(event) {
    setCity(event.target.value);
  }

  axios.get(apiUrl).then(displayWeather);

  return (
    <div className="SearchEngine">
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
            <strong>{displayCity}</strong>
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
        <div className="col-5 current-weather">
          <h4 className="description">Cloudy</h4>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy"
            className="weather-icon"
          />
          <span>
            <strong className="current-temp">19</strong>
            <span className="units">
              <a href="/" className="active">
                °C{" "}
              </a>{" "}
              | <a href="/">°F </a>
            </span>
          </span>
        </div>
        <div className="col-7">
          <ul className="current-conditions">
            <li>Feels like: 18°C</li>
            <li>Humidity: 83%</li>
            <li>Windspeed: 18km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
