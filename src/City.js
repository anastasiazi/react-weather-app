import React from "react";

export default function City() {
  return (
    <div>
      <div className="row d-flex align-items-center">
        <div className="col-8">
          <div className="overview">
            <h1 id="city">Kyiv</h1>
            <ul>
              <li>
                Last updated at <span id="date">Monday 13:24</span>
              </li>
              <li id="description"></li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <span className="feels-like">
            Feels like
            <span id="feels-like-degrees">12</span>
            <span id="feels-like-units">°C</span>
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center row">
        <div className="col-6">
          <div className="d-flex align-items-center weather-temperature justify-content-around">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="weather icon"
              id="icon"
            />
            <div className="text-end w-100">
              <strong id="temperature">11</strong>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  °C{" "}
                </a>
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="humidity">
            <li>
              Humidity: <span id="humidity">59</span>%
            </li>
            <li>
              Wind: <span id="wind">0</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}