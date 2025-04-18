import React, { useEffect, useState } from "react";
import Dark from "./Dark";
import Fahrenheit from "./Fahrenheit";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import Daily from "./Daily";

function Main() {
  const [currentDay, setCurrentDay] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("London"); // Default city

  const apiKey = "5d7b9ccc3e46361f64b317d8161bb16e";

  useEffect(() => {
    let now = new Date();
    setHour(now.getHours());
    setMinutes(now.getMinutes());
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    setCurrentDay(days[now.getDay()]);
  }, []);

  useEffect(() => {
    fetchWeather(city);
  }, [city]); // Fetch weather when `city` changes

  function fetchWeather(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse).catch((error) => {
      console.error("Error fetching weather:", error);
    });
  }

  function getResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });

    setTemperature(response.data.main.temp);
  }

  function handleSearch(event) {
    event.preventDefault();
    let userInput = document.querySelector("#search-input").value.trim();
    if (userInput) {
      setCity(userInput);
    }
  }

  if (weatherData.ready) {
    return (
      <div className="w-full items-center justify-center p-6">
        <h1>Weather App</h1>
        <Dark />
        <div className="grid h-full w-full grid-cols-2 gap-2 rounded-[12px]">
          <div className="left rounded-[12px] h-full">
            <form id="search-form" onSubmit={handleSearch}>
              <input className="search-input" id="search-input" type="text" placeholder="Search" />
              <button type="submit" className="searchBtn">Search</button>
            </form>
            <div className="main-content">
              <h2>Weather Forecast</h2>
              <span>
              <h3 id="city">{weatherData.city}</h3>
              </span>
              <WeatherIcon />
              <img src={weatherData.icon} alt={weatherData.description} className="card-img-top" />
              <div id="weather-temperature">{Math.round(weatherData.temperature)}°C</div>
              <div id="date">{currentDay}, {hour}:{minutes < 10 ? `0${minutes}` : minutes}</div>
              <div>{weatherData.description}</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
            <div>Humidity
              <div className="humidity">{weatherData.humidity}%</div>
            </div>
            <div className="visibility">Visibility</div>
            <div className="air-quality">Air Quality</div>
          </div>
          </div>
          <div className="right rounded-[12px] h-full">
            <h3>Days of the week</h3>
            <Fahrenheit />
            <div className="daily">
            <Daily city={city} />
            </div>
            <div className="grid"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading weather data...</p>;
  }
}

export default Main;


