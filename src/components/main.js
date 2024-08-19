import React, { useEffect } from 'react';
import { useState } from "react";
import Dark from './Dark';
import Fahrenheit from './Fahrenheit';
import axios from 'axios';

function Main(){
    const [currentDay, setCurrentDay] = useState('');
    const [time, setTime] = useState('');
    const [city, setCity] = useState('Pretoria');

    useEffect(()=>{
        let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let days = ["Sunday","Monday", "Tuesday", "Wednsday", "Friday", "Saturday"];
    console.dir(now);
    
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


    let apiUrl = "http://api.weatherapi.com/v1/current.json?key=58ba20b08f854e3da23163958241108&q=Lagos&aqi=yes";

    const currentLocation =(response) =>{
        console.log("response", response.coords.latitude);
        let latitude = response.coords.latitude;
  let longitude = response.coords.longitude;
  //console.log(longitude);
  let apiKey = "58ba20b08f854e3da23163958241108";
  let apiPoint = "http://api.weatherapi.com/v1/current.json";
  let apiUrl = `${apiPoint}?key=${apiKey}&q=${latitude},${longitude}`;

  let currentTemperature = document.querySelector(".weather-temperature");
  //currentTemperature.innerHTML = response.current.temp_c;
//"http://api.weatherapi.com/v1/current.json?key=58ba20b08f854e3da23163958241108&q=-25.75,28.19"
axios.get(apiUrl).then(console.log(response));
    }
    navigator.geolocation.getCurrentPosition(currentLocation);


    let getInput = document.querySelector(".search-input");
    let key = "58ba20b08f854e3da23163958241108";

let url = `http://api.weatherapi.com/v1/current.json?key=58ba20b08f854e3da23163958241108&q=Pretoria&aqi=yes`;

const updateWeather = (response) =>{
    let weatherTemp = document.querySelector("#weather-temperature");
    let temp = response.data.current.temp_c;
    console.log(weatherTemp);
    console.log(response);
    weatherTemp.innerHTML = temp;
    console.log(weatherTemp);
}


    const getCity = (city)=>{
        let key = "58ba20b08f854e3da23163958241108";
        let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`;
        console.log(url);
        axios.get(url).then(updateWeather).catch((error)=>console.log(error));
    }


    const searchButton = (event) =>{
        event.preventDefault();
        let userInput = document.querySelector("#search-input")
        let h2 = document.querySelector("#city");
        setCity(getInput); 
       h2.innerHTML = `${userInput.value}`;
        getCity(userInput.value);
    }

//console.log(form);

    const dailyForecast=(response)=>{
        let forecast = response.data.daily;
        let api = "http://api.weatherapi.com/v1/forecast.json?key=58ba20b08f854e3da23163958241108&q=Pretoria&aqi=yes&days=5";
  let forecastElement = document.querySelector("#forecast");
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
        <h2 id="city"></h2>
        
        <div id="weather-temperature">12</div>
        <div id="date"></div>
        <div>Mostly Cloudy</div>
        <div>Rain</div>
        </div>
  </div>
  <div className="right rounded-[12px] h-full">
    Days of the week
    <Fahrenheit/>
    <div className="grid grid-cols-6 gap-4 ">
        <div className="bg-white rounded-[12px]">
            Tue
        <div className="weather-temp">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Wed
            
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Thurs
            
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Fri
            
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Sat
           
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Sun
           
        <div className="weather-temperature">12</div>
            </div>
        </div>
        </div>
        <div className="grid grid-cols-3 gap-4">

  <div>Humidity
    <div className="humidity"></div>
  </div>
  <div className="visibility">Visibility</div>
  <div className="air-quality">Air Quality</div>
</div>
        </div>
    </div>
    );
}


export default Main