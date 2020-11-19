import React, { useState } from "react";

export default function CurrentTemp (props) {
    const [unit, setUnit] = useState("celsius")

   function displayFahrenheit(event) {
       event.preventDefault();
       setUnit("fahrenheit");
   }

   function displayCelsius(event) {
       event.preventDefault();
       setUnit("celsius");
   }

   if (unit === "celsius") {
    return (
        <span>
            <strong className="current-temp">
              {Math.round(props.temp)}
            </strong>
            <span className="units">
                 °C |{" "}
                <a href="/" onClick={displayFahrenheit}>
                  °F 
               </a>
            </span>
          </span>
    );
} else {
    return (        
    <span>
            <strong className="current-temp">
              {Math.round(props.temp * 9 /5 +32)}
            </strong>
            <span className="units">
              <a href="/" onClick={displayCelsius}>°C </a> 
                | °F 
            </span>
          </span>
    );
}
}