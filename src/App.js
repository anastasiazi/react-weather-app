import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import Credits from "./Credits";

import Search from "./Search";
import "./styles.css";
import axios, {get} from "axios";

export default function App() {

    const [city, setCity] = useState("Odesa");
    const [ready, setReady] = useState(false)
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});

    function updateWeather(response) {
        setWeather({
            city: response.data.city,
            temp: Math.floor(response.data.temperature.current),
            feelsLike: Math.floor(response.data.temperature.feels_like),
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon_url,
            icon_alt: response.data.condition.icon,
            date: new Date(response.data.time * 1000)
        });
    }

    function updateForecast(response) {
        setForecast(response.data.daily)
    }

    function getForecast(city) {
        const apiKey = "4904e8e60b2d25ac4bf6450fbbt3bo36";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(updateForecast);

        setReady(true);

    }

    function getWeather(city) {
        const apiKey = "4904e8e60b2d25ac4bf6450fbbt3bo36";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(updateWeather);

        getForecast(city);
    }

    let handleCity = (city) => {
        setCity(city);
        getWeather(city);
    };

    if (!ready) {
        getWeather(city);

        return (
            <div className="App">
                <div className="weather-app-wrapper">
                    <Search searchCity={handleCity}/>
                    <Credits/>
                </div>
            </div>


        )
    } else {
        return (
            <div className="App">
                <div className="weather-app-wrapper">
                    <Search searchCity={handleCity}/>
                    <WeatherCard weather={weather} forecast={forecast}/>
                    <Credits/>
                </div>
            </div>
        );
    }
}
