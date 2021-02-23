import React, {useState} from "react";

import axios from "axios";
import "./Weather.css"


export default function Weather (props) 
{

  const [weather, setWeather]=useState({ready:false});

  function handleResponse(response){
    console.log(response.data);
    setWeather({
      ready: true,
      date: "Wednesday, 21:24",
      temperature:response.data.main.temp,
      wind:response.data.wind.speed,
      city:response.data.name,
      humidity: response.data.main.humidity,
      description:response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });

  }

  if (weather.ready){
    return (<div className="Weather">
      <form>
        <div className="row">
        <div className="col-9">
        <input type="search"
        placeholder="Enter a city..."
        className="form-control"
        autoFocus="on"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
      </div>
      </div>
      </form>
    <h1>{weather.city}</h1>
    <ul>
        <li>{weather.date}</li>
        <li className="text-capitalize">{weather.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
        <img src={weather.iconUrl} alt={weather.description}></img>
     
     <span className="temperature">{Math.round(weather.temperature)}</span>
     <span className="unit">°C</span>
        </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
    </div>
    </div>);
    }
    else {
  const apiKey = "cea4eaec36371a8d64cf80cfa988df3d";

  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";}
}
     
