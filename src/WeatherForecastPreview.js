import React from 'react';
import WeatherIcon from "./WeatherIcon"
import "./WeatherForecastPreview.css"

export default function WeatherForecastPreview (props){

    function Hours (){
    let date=new Date(props.data.dt*1000)
    let hours=date.getHours()
    return `${hours}:00`;
    }

    function Temperature(){
        let temperature = Math.round(props.data.main.temp)
        return `${temperature}°C`;
    }
    return (
        <div className="WeatherForecastPreview col">  
        <div>{Hours()}</div>
        <WeatherIcon code={props.data.weather[0].icon}/>
        <div>{Temperature()}</div>
        </div>
    );
}