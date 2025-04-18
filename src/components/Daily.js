import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Daily(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (props.city) {
      let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(getResponse);
    }
  }, [props.city]); // Runs when props.city changes

  function getResponse(response) {
    setForecast(response.data.list.filter((reading, index) => index % 8 === 0)); // Filter daily data
    setLoaded(true);
  }

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="daily">
      <div className="grid grid-cols-6 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className="bg-white rounded-[12px] p-4">
            <div className="WeatherForecast-day">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}
            </div>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
            <div className="weather-temperature">{Math.round(day.main.temp)}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
}
