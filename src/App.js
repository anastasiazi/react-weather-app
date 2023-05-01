import React from "react";
import WeatherCard from "./WeatherCard";
import Credits from "./Credits";

import Search from "./Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <Search />
        <WeatherCard />
        <Credits />
      </div>
    </div>
  );
}
