import React, { useEffect, useState } from "react";
import axios from "axios";

const Hourly = () => {
  const [forecast, setForecast] = useState([]);
  const apiKey = "64469ac67e6dc941feb5b50915a18dc7";
  const [temperature, setTemperature] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=8&appid=${apiKey}`;

      try {
        const response = await axios.get(url);
        setForecast(response.data.list);
      } catch (error) {
        console.error("Error fetching the weather data:", error);
      }
    };

    getData();
  }, []);

   useEffect(() => {
      fetchWeather(city);
    }, [city]); 

    
  function fetchWeather(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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

  return (
    <div>
      <h2>24-Hour Weather Forecast</h2>
      <div>
        {forecast.map((hour, index) => (
          <div key={index}>
            <p>Time: {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
            <p>Temperature: {Math.round(hour.main.temp)}°C</p>
            <p>Weather: {hour.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hourly;