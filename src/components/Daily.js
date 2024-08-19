import React from "react";

export default function Daily(){
    let apiKey ="64469ac67e6dc941feb5b50915a18dc7"
    let apiUrl = ""
    return(
        <div className="daily">
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
    )
}