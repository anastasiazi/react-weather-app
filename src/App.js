import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import Credits from "./Credits";

import Search from "./Search";
import "./styles.css";
import axios, {get} from "axios";

export default function App() {

    const [city, setCity] = useState();
    const [ready, setReady] = useState(false)
    const [weather, setWeather] = useState({});

    function updateWeather(response) {
        setWeather({
            city: response.data.city,
            temp: Math.floor(response.data.temperature.current),
            feelsLike: Math.floor(response.data.temperature.feels_like),
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed
        });
    }

    function getWeather(city) {
        const apiKey = "4904e8e60b2d25ac4bf6450fbbt3bo36";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(updateWeather);
        setReady(true);
    }

    let handleCity = (city) => {
        setCity(city);
        getWeather(city);
    };

    if (!ready) {
        getWeather("Odesa");

        return (
            <div className="App">
            </div>
        )
    } else {
        return (
            <div className="App">
                <div className="weather-app-wrapper">
                    <Search searchCity={handleCity}/>
                    <WeatherCard weather={weather}/>
                    <Credits/>
                </div>
            </div>
        );
    }
}
