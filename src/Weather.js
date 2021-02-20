import React from "react"; 
import "./Weather.css"


export default function Weather (){
    return <div className="Weather">
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
    <h1>Amsterdam, NL</h1>
    <ul>
        <li>Wednesday, 21:24</li>
        <li>Raining</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png" alt="raining"></img>
     
     <span className="temperature">9</span>
     <span className="unit">°C</span>
        </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 80%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
    </div>
    </div>;
}