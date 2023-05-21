import React from "react";

export default function WeatherForecast() {
    return (
        <div className="weather-forecast d-flex justify-content-between">
            <div className="weather-forecast-inner col-2 d-flex flex-column align-items-center">
                <span className="weather-forecast-day">Thu</span>
                <img className="weather-forecast-icon"
                     src="data:image/jpeg;base64,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"
                     alt="test"
                     id="icon"
                />
                <div className="weather-forecast-temp">
                    <span className="weather-forecast-temp-max">19°</span>
                    <span className="weather-forecast-temp-min">10°</span>
                </div>
            </div>
        </div>
    );
}