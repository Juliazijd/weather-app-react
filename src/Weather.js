import React, { useState } from "react";
import axios from "axios";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function SearchEngine(props) {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      //date: new Date(response.data.dt * 1000),
      description: response.data.weather.description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
  event.preventDefault();
}

 function updateSubmit(event) {
 setCity(event.target.value);
 }

if (loaded) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-4">
            <input
              type="search"
              placeholder="Enter any city..."
              className="search-input w-100"
              autoComplete={false}
              autoFocus={true}
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
      <WeatherCurrent data={weather}/>
      <WeatherForecast/>
    </div>
  );
} else {
  let apiKey = "427b64eee1edb35b88796269421b55f1";
  let units = "metric";
  let city = "New York"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(displayWeather);

  return "Loading...";
 }
}
