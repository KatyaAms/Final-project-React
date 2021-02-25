import React, {useState} from 'react';
import "./WeatherForecast.css"

import WeatherForecastPreview from "./WeatherForecastPreview"
import axios from "axios";


export default function WeatherForecast(props) {

const [loaded, setLoaded]=useState(false);
const [forecast, setForecast]=useState(null);


    function forecastResponse(response){
        setForecast(response.data);
        setLoaded (true);
        
    }

    if (loaded && props.city === forecast.city.name) {
       
        return (
        <div className="WeatherForecast row">
      <WeatherForecastPreview data={forecast.list[0]}/>
      <WeatherForecastPreview data={forecast.list[1]}/>
      <WeatherForecastPreview data={forecast.list[2]}/>
      <WeatherForecastPreview data={forecast.list[3]}/>
      <WeatherForecastPreview data={forecast.list[4]}/>
        </div>
        );
    }else{

    let apiKey="cea4eaec36371a8d64cf80cfa988df3d"
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(url).then(forecastResponse);

    return null;
}
}