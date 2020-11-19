import React from "react";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";

import "./WeatherCurrent.css";

export default function WeatherCurrent(props) {

    return(
        <div className="WeatherCurrent">
          <div className="city-and-time row">
        <div className="col-6">
          <h3 className="city-header">
            <strong>{props.data.city}</strong>
          </h3>
   <h5 className="description text-capitalize">{props.data.description}</h5>
        </div>
        <div className="col-6">
          <div className="last-updated-time">

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 current-weather">
          <span>
            <WeatherIcon  icon={props.data.icon}/></span>
 <CurrentTemp temp={props.data.temperature} />
        </div>
        <div className="col-8">
          <ul className="current-conditions">
            <li>Feels like: {Math.round(props.data.feelslike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Windspeed: {Math.round(props.data.windspeed * 1.852)}km/h</li>
          </ul>
        </div>
      </div>
      </div>
    );
}