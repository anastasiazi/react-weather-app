import React, {useState} from "react";
import City from "./City";
import WeatherForecast from "./WeatherForecast"

export default function WeatherCard(props) {
    const [units, setUnits] = useState("metric")
    function getUnits(units) {
        setUnits(units);
    }

    if (props.weather.city) {
        return (
            <div className="weather-app-container shadow-lg">
                <City weather={props.weather} updateUnits={getUnits}/>
                <WeatherForecast forecast={props.forecast} units={units} />
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
