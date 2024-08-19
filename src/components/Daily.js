import React, {useState} from "react";
import axios from 'axios';

export default function Daily(){
let celsiusTemperature = "";
  const getDaily = (response)=>{
    let forecast = response.data.daily
  }
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);

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
            Tue
            <img
                  src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
                  class="card-img-top"
                />
        <div className="weather-temp">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Wed
            <img
                  src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
                  class="card-img-top"
                />
            
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Thurs
            <img
                  src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
                  class="card-img-top"
                />
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Fri
            <img
                  src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
                  class="card-img-top"
                />
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Sat
            <img
                  src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
                  class="card-img-top"
                />
        <div className="weather-temperature">12</div>
            </div>
        <div className="bg-white rounded-[12px]">
            Sun
            <img
                  src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
                  class="card-img-top"
                />
        <div className="weather-temperature">12</div>
            </div>
        </div>
        </div>
    )
}