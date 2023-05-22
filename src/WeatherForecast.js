import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    if (props.forecast[0]) {
        return (
            <div className="weather-forecast d-flex justify-content-between">
                {props.forecast.map(function (dailyForecast, index) {
                    if (index < 6) {
                        return (
                            <WeatherForecastDay key={index} forecastData={dailyForecast} units={props.units}/>
                        )
                    }
                })}
            </div>
        );
    } else {
        return <p>Loading...</p>
    };
}