import React from "react";

export default function WeatherForecastDay(props) {
    let maxTemp = Math.round(props.forecastData.temperature.maximum);
    let minTemp = Math.round(props.forecastData.temperature.minimum);

    function displayTemp(temperature) {
        if (props.units === 'metric') {
            return `${temperature}°`;
        } else {
            temperature = Math.round((temperature * 9 / 5) + 32);
            return `${temperature}°`;
        }
        ;
    };

    function day() {

        const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let date = new Date(props.forecastData.time * 1000);
        let day = date.getDay();

        return DAYS[day];
    };

    if (props.forecastData) {
        return (
            <div className="weather-forecast-inner col-2 d-flex flex-column align-items-center">
                <span className="weather-forecast-day">{day()}</span>
                <img className="weather-forecast-icon"
                     src={props.forecastData.condition.icon_url}
                     alt={props.forecastData.condition.icon}
                     id="icon"
                />
                <div className="weather-forecast-temp">
                    <span className="weather-forecast-temp-max">{displayTemp(maxTemp)}</span>
                    <span className="weather-forecast-temp-min">{displayTemp(minTemp)}</span>
                </div>
            </div>
        )
    }
    ;
}