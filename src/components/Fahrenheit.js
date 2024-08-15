import React from 'react';
import './App.css';

function Fahrenheit(){
    function showCelsius(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector(".");
        temperatureElement.innerHTML = Math.round(celsiusTemperature);
      }
      
      let celsius = document.querySelector("#celsuis-link");
      celsius.addEventListener("click", showCelsius);
      
      function showFahrenheit(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector(".");
        let fahrenheitValue = (celsiusTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = Math.round(fahrenheitValue);
      }
      
      let fahrenheitLink = document.querySelector("#fahrenheit-link");
      fahrenheitLink.addEventListener("click", showFahrenheit);

      return(
        <div className="unit-switch">
             <button>Fahrenheit/Celsius</button>
        </div>
      )
      
}

export default Fahrenheit