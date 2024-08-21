import React, { useEffect } from 'react';
import { useState } from "react";
import Dark from './Dark';
import Fahrenheit from './Fahrenheit';
import axios from 'axios';
import Daily from './Daily';
import WeatherIcon from './WeatherIcon';

function Main(){
    const [currentDay, setCurrentDay] = useState('');
    const [time, setTime] = useState('');
    const [temperature, setTemperature]= useState("");
    const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState();


  setTemperature(response.data.main.temp);

    useEffect(()=>{
        let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let days = ["Sunday","Monday", "Tuesday", "Wednsday", "Friday", "Saturday"];
    
    let currentDay = days[now.getDay()];
    console.log(currentDay);
    let date = document.getElementById('date');
     date.innerHTML = `${currentDay}, ${hour}:${minutes}`;
    },[]);

    useEffect(()=>{
        let form = document.querySelector("#search-form");
        console.log(form);
        form.addEventListener("submit", searchButton);

        return() =>{
            form.removeEventListener("submit", searchButton);
        }

    },[]);


    let apiUrl = "";

    const currentLocation =(response) =>{
        let latitude = response.coords.latitude;
  let longitude = response.coords.longitude;
  let apiKey = "5d7b9ccc3e46361f64b317d8161bb16e";
  let apiPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiPoint}lat=${latitude}&lon${longitude}&appid=${apiKey}`;
  let currentTemperature = document.querySelector(".weather-temperature");
axios.get(apiUrl).then(console.log(response));
    }
    navigator.geolocation.getCurrentPosition(currentLocation);



    const getCity = (city)=>{
        let key = "5d7b9ccc3e46361f64b317d8161bb16e";
        let url = ``;
        axios.get(url).then(getResponse).catch((error)=>console.log(error));
    }

    function getResponse(response) {
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
      }


    const searchButton = (event) =>{
        event.preventDefault();
        let userInput = document.querySelector("#search-input")
        let h2 = document.querySelector("#city");
        setCity(userInput); 
       h2.innerHTML = `${userInput.value}`;
        getCity(userInput.value);
    }

    return(
    <div className="w-full items-center justify-center p-6">
        <h1>Weather App</h1>
        <Dark/>
        <div className="grid h-full w-full grid-cols-2 gap-2 rounded-[12px]">
            <div className="left rounded-[12px] h-full">

                <form id="search-form">
        <input className="search-input" id="search-input" type="text" placeholder="Search"/><br/>
        <button className="searchBtn">Search</button>
        </form>
        <div className="main-content">
        <h1>Weather Forecast</h1>
        <h2 id="city">{temperature}</h2>
        <WeatherIcon code={props.data.icon} alt={props.data.description}/>
        <img
                  src={weather.iconUrl}
                  className="card-img-top"
                />
        <div id="weather-temperature">{temp}</div>
        <div id="date"></div>
        <div>{weather.data.description}</div>
        <div>Rain</div>
        </div>
  </div>
  <div className="right rounded-[12px] h-full">
    Days of the week
    <Fahrenheit/>
    <div className="grid ">
        <Daily/>
        </div>
        </div>
        <div className="grid grid-cols-3 gap-4">

  <div>Humidity
    <div className="humidity">{weather.humidity}</div>
  </div>
  <div className="visibility">Visibility</div>
  <div className="air-quality">Air Quality</div>
</div>
        </div>
    </div>
    );
}


export default Main