import React, {useState} from "react";

export default function City(props) {
    const [unit, setUnit] = useState("metric");

    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = DAYS[(props.weather.date).getDay()];
    const hour = (props.weather.date).getHours();
    const minute = (props.weather.date).getMinutes() < 10 ? `0${(props.weather.date).getMinutes()}` : (props.weather.date).getMinutes();

    function displayTemp(temp) {
        if (unit === 'metric') {
            return temp;
        } else {
            return Math.round((temp * 9 / 5) + 32);
        }
        ;
    };

    function changeUnits(unit) {
        props.updateUnits(unit);
        setUnit(unit);
    };

    return (
        <div>
            <div className="row d-flex align-items-center">
                <div className="col-8">
                    <div className="overview">
                        <h1 id="city">{props.weather.city}</h1>
                        <ul>
                            <li>
                                Last updated at <span id="date">{day} {hour}:{minute}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4">
          <span className="feels-like">
            Feels like
            <span id="feels-like-degrees"> {displayTemp(props.weather.feelsLike)}</span>
            <span id="feels-like-units">°C</span>
          </span>
                </div>
            </div>
            <div className="d-flex align-items-center row">
                <div className="col-6">
                    <div className="d-flex align-items-center weather-temperature justify-content-around">
                        <img
                            src={props.weather.icon}
                            alt={props.weather.icon_alt}
                            id="icon"
                        />
                        <div className="text-end w-100">
                            <strong id="temperature">{displayTemp(props.weather.temp)}</strong>
                            <span className="units">
                              <a href="#" id="celsius-link"
                                 className={unit === "metric" ? "active" : null}
                                 onClick={() => changeUnits("metric")}>
                                 &nbsp;°C&nbsp;
                              </a>
                              |
                              <a href="#" id="fahrenheit-link"
                                 className={unit === "imperial" ? "active" : null}
                                 onClick={() => changeUnits("imperial")}>
                                °F
                              </a>
                          </span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul className="humidity">
                        <li>
                            Humidity: <span id="humidity">{props.weather.humidity}</span>%
                        </li>
                        <li>
                            Wind: <span id="wind">{props.weather.wind}</span> km/h
                        </li>
                    </ul>
                </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
        </div>
    )
}
