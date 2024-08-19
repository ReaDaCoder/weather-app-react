import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hourly = () => {
  const [forecast, setForecast] = useState([]);

  let apiKey = "64469ac67e6dc941feb5b50915a18dc7";


  useEffect(() => {
    const getData = async () => {
      const key = '4469ac67e6dc941feb5b50915a18dc7';
      const cityId = ''; 
      const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&cnt=8&appid=${key}`;

      try {
        const response = await axios.get(url);
        setForecast(response.data.list); 
      } catch (error) {
        console.error("Error fetching the weather data:", error);
      }
    };

   getData();
  }, []);

  return (
    <div>
      <h2>24-Hour Weather Forecast</h2>
      <div>
        {forecast.map((hour, index) => (
          <div key={index}>
            <p>Time: {new Date(hour.dt * 1000).toLocaleTimeString()}</p>
            <p>Temperature: {hour.main.temp} °C</p>
            <p>Weather: {hour.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
