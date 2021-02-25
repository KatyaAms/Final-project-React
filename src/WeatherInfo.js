import React from 'react';
import CorrectDate from "./CorrectDate"
import WeatherIcon from "./WeatherIcon"
import "./WeatherInfo.css"
import WeatherTemperature from "./WeatherTemperature"


export default function WeatherInfo(props)
{return(
 <div className = "WeatherInfo">
     <h1>{props.data.city}, {props.data.country}</h1>
    <ul>
        <li>
          <CorrectDate date= {props.data.date}/>
         </li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-8">  
      <WeatherIcon code={props.data.icon}/>
<WeatherTemperature celsius={props.data.temperature}/>
        </div>
          <div className="col-4">
            <div className="OtherWeather">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
            </div>
          </div>
    </div>
     </div>
);
};