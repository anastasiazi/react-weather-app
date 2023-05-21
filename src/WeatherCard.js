import React from "react";
import City from "./City";
import WeatherForecast from "./WeatherForecast"

export default function WeatherCard(props) {
    if (props.weather.city) {
        return (
            <div className="weather-app-container shadow-lg">
                <City weather = {props.weather}/>
                <WeatherForecast />
            </div>
        );
    } else {
        return (
            <div className="weather-app-container shadow-lg">
                <div className="container text-center">
                    <span className="text-center">Loading...</span>
                </div>
            </div>
        )
    }
}
