// src/components/WeatherForecast/WeatherForecast.jsx
import React from 'react';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import WeatherData from './WeatherData/WeatherData';
import './WeatherForecast.css';

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <WeatherIcon img={img} imgAlt={imgAlt}/>
      <WeatherData day={day} conditions={conditions} time={time}/>
    </div>
  );
}

export default WeatherForecast;
