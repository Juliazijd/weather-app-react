import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastHourly(props) {
const [unit, setUnit] = useState("celsius");

let hours = new Date(props.data.dt * 1000).getHours()
if (hours < 10) {
    hours = `0${hours}`
}

function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius") {
    return (
   <div className="WeatherForecastHourly col-2">
          <ul> 
              <li>{hours}:00</li>
              <li>{Math.round(props.data.main.temp)}°C | <a href="/" onClick={displayFahrenheit}>°F</a></li>
              <li><WeatherIcon icon={props.data.weather[0].icon} /></li>
              <li>{Math.round(props.data.wind.speed * 1.852)}km/h</li>
            </ul>
    </div>
    );
} else {
    return (
   <div className="WeatherForecastHourly col-2">
          <ul> 
              <li>{hours}:00</li>
              <li>{Math.round(props.data.main.temp * 9 / 5 + 32)}<a href="/" onClick={displayCelsius}>°C</a>|°F</li>
              <li><WeatherIcon icon={props.data.weather[0].icon} /></li>
              <li>{Math.round(props.data.wind.speed * 1.852)}km/h</li>
            </ul>
    </div>
    );
}
}