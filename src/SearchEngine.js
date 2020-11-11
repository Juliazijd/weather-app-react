import React, { useState } from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState();
  const [displayCity, setDisplayCity] = useState("Amsterdam");

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayCity(city);
  }

  function displaySearch(event) {
    setCity(event.target.value);
  }

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
              onChange={displaySearch}
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
              <a href="/" class="active">
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
