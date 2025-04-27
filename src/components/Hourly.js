import React, { useEffect, useState } from "react";
import axios from "axios";

const Hourly = () => {
  const [forecast, setForecast] = useState([]);
  const apiKey = "64469ac67e6dc941feb5b50915a18dc7";
  const [temperature, setTemperature] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("London");


  useEffect(() => {
    if (city) {
      fetchForecast(city); 
      fetchWeather(city);
    }
  }, [city]);

  function fetchForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=8&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setForecast(response.data.list);
      })
      .catch((error) => {
        console.error("Error fetching the forecast data:", error);
      });
  }

  function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(getResponse)
      .catch((error) => {
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

  let popup = document.getElementById("popup");

  function hideHourlyForecast(){
    popup.classList.remove("display-hourly")
  }

  return (
    <div className="hourly" id="popup">
  <div className="grid grid-cols-6 gap-4">
    {forecast.map((hour, index) => (
      <div key={index} className="bg-white rounded-[12px] p-4">
        <div className="WeatherForecast-hour">
          {/* Format the time nicely */}
          {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>

        <img
          src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
          alt={hour.weather[0].description}
        />

        <div className="weather-temperature">
          {Math.round(hour.main.temp)}°C
        </div>
      </div>
    ))}
  </div>
  <div className="hide"  onClick={hideHourlyForecast}>Hide</div>
</div>
  );
};

export default Hourly;