import React from "react";
import CurrentTime from "./CurrentTime";

export default function WeatherCurrent(props) {

    return(
        <div className="WeatherCurrent">
          <div className="city-and-time row">
        <div className="col-6">
          <h3 className="city-header">
            <strong>{props.data.city}</strong>
          </h3>
        </div>
        <div className="col-6">
          <div className="last-updated-time">
            <div className="current-time">
              <CurrentTime date={props.data.date}/>
              </div>
            <div className="text-last-updated">(last updated)</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5 current-weather">
          <h4 className="description text-capitalize">{props.data.description}</h4>
          <span><img src={props.data.icon} alt={props.data.description}/></span>
          <span>
            <strong className="current-temp">
              {Math.round(props.data.temperature)}
            </strong>
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
            <li>Feels like: {Math.round(props.data.feelslike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Windspeed: {Math.round(props.data.windspeed * 1.852)}km/h</li>
          </ul>
        </div>
      </div>
      </div>
    );
}