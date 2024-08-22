import React, { useEffect } from 'react';
import { useState } from "react";
import Dark from './Dark';
import Fahrenheit from './Fahrenheit';
import axios from 'axios';
import Daily from './Daily';
import WeatherIcon from './WeatherIcon';

function Main() {
    const [currentDay, setCurrentDay] = useState('');
    const [time, setTime] = useState('');
    const [temperature, setTemperature] = useState(null);

    const [weatherData, setWeatherData] = useState({ ready: false });
    // const [city, setCity] = useState();

    useEffect(() => {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
        let currentDay = days[now.getDay()];
        console.log(currentDay);
        let date = document.getElementById('date');
        date.innerHTML = `${currentDay}, ${hour}:${minutes}`;
        console.log(hour);
    }, []);

    useEffect(() => {
        let form = document.querySelector("#search-form");
        console.log(form);
        form.addEventListener("submit", searchButton);

        return () => {
            form.removeEventListener("submit", searchButton);
        }

    }, []);

    function getResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });

        setTemperature(response.data.main.temp);
    }

    // const getCity = (city) => {
    //     let key = "5d7b9ccc3e46361f64b317d8161bb16e";
    //     let url = ``;
    //     axios.get(url).then(getResponse).catch((error) => console.log(error));
    // }

    const searchButton = (event) => {
        event.preventDefault();
        let userInput = document.querySelector("#search-input");
        let h2 = document.querySelector("#city");
        // setCity(userInput); 
        //h2.innerHTML = `${userInput.value}`;
        // getCity(userInput.value);
    }

    if (weatherData.ready) {
        return (
            <div className="w-full items-center justify-center p-6">
                <h1>Weather App</h1>
                <Dark />
                <div className="grid h-full w-full grid-cols-2 gap-2 rounded-[12px]">
                    <div className="left rounded-[12px] h-full">
                        <form id="search-form">
                            <input className="search-input" id="search-input" type="text" placeholder="Search" /><br />
                            <button className="searchBtn">Search</button>
                        </form>
                        <div className="main-content">
                            <h1>Weather Forecast</h1>
                            <h2 id="city">{Math.round(temperature)}</h2>
                            <WeatherIcon />
                            <img
                                src={weatherData.iconUrl}
                                className="card-img-top"
                            />
                            <div id="weather-temperature">{weatherData.temperature}</div>
                            <div id="date">{currentDay}, {hour}:${minutes}</div>
                            <div>{weatherData.description}</div>
                            <div>Rain</div>
                        </div>
                    </div>
                    <div className="right rounded-[12px] h-full">
                        Days of the week
                        <Fahrenheit />
                        <div className="grid">
                        
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>Humidity
                            <div className="humidity">{weatherData.humidity}</div>
                        </div>
                        <div className="visibility">Visibility</div>
                        <div className="air-quality">Air Quality</div>
                    </div>
                </div>
            </div>
        );
    } else {
        let city = "London";
        let apiKey = "5d7b9ccc3e46361f64b317d8161bb16e";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getResponse);

        return "Data unavailable!";
    }
} 

export default Main;


/*const currentLocation =(response) =>{
        let latitude = response.coords.latitude;
  let longitude = response.coords.longitude;
  let apiKey = "5d7b9ccc3e46361f64b317d8161bb16e";
  let apiPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiPoint}lat=${latitude}&lon${longitude}&appid=${apiKey}`;
  let currentTemperature = document.querySelector(".weather-temperature");
axios.get(apiUrl).then(console.log(response));
    }
<WeatherIcon code={props.data.icon} alt={props.data.description}/>
    navigator.geolocation.getCurrentPosition(currentLocation);
*/