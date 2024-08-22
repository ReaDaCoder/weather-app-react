/*import React, {useState} from "react";
import axios from 'axios';

export default function Daily(){
let celsiusTemperature = "";
  const getDaily = (response)=>{
    let forecast = response.data.daily
  }
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function getResponse(response){
    console.log(response);
    setTemperature(response.data.main.temp);
    setLoaded(true);
  }

    let apiKey ="64469ac67e6dc941feb5b50915a18dc7"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
    return(
        <div className="daily">
          <div className="grid grid-cols-6 gap-4 ">
          <div className="bg-white rounded-[12px]">
          <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="weather-temp">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Wed
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Thurs
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Fri
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Sat
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Sun
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="weather-temperature">12</div>
            </div>
        </div>
        </div>
    )
}*/