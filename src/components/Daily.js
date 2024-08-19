import React from "react";

export default function Daily(){

  const getDaily = (response)=>{
    let forecast = response.data.daily
  }


    let apiKey ="64469ac67e6dc941feb5b50915a18dc7"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
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