import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast() {

      return  ( 
      <div className="Forecast">
        <h4 className="forecast-header">Forecast</h4>
        <div className="row forecast">
          <div className="col-2">
            <ul>
              <li>Sat</li>
              <li>19°C|°F</li>
              <li><ReactAnimatedWeather
    icon="CLEAR_DAY" 
    color="purple"
    size={50}
    animate={true}
  /></li>
              <li>18km/h</li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>Sun</li>
              <li>19°C|°F</li>
              <li><ReactAnimatedWeather
    icon="CLOUDY" 
    color="purple"
    size={50}
    animate={true}
  /></li>
              <li>18km/h</li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>Mon</li>
              <li>19°C|°F</li>
              <li><ReactAnimatedWeather
    icon="CLOUDY" 
    color="purple"
    size={50}
    animate={true}
  /></li>
              <li>18km/h</li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>Tue</li>
              <li>19°C|°F</li>
              <li><ReactAnimatedWeather
    icon="FOG" 
    color="purple"
    size={50}
    animate={true}
  /></li>
              <li>18km/h</li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>Wed</li>
              <li>19°C|°F</li>
              <li><ReactAnimatedWeather
    icon="RAIN" 
    color="purple"
    size={50}
    animate={true}
  /></li>
              <li>18km/h</li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>Thu</li>
              <li>19°C|°F</li>
              <li><ReactAnimatedWeather
    icon="PARTLY_CLOUDY_DAY" 
    color="purple"
    size={50}
    animate={true}
  /></li>
              <li>18km/h</li>
            </ul>
          </div>
        </div>
      </div>
      );
}