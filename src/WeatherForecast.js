import React from "react";
import WeatherForecastHourly from "./WeatherForecastHourly";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {

  return  ( 
      <div className="WeatherForecast">
        <h4 className="forecast-header">Forecast</h4>
        <div className="row forecast">
            <WeatherForecastHourly data={props.data.list[0]}/>
            <WeatherForecastHourly data={props.data.list[1]}/>
            <WeatherForecastHourly data={props.data.list[2]}/>
            <WeatherForecastHourly data={props.data.list[3]}/>
            <WeatherForecastHourly data={props.data.list[4]}/>
            <WeatherForecastHourly data={props.data.list[5]}/>
        </div>
      </div>
      );
}