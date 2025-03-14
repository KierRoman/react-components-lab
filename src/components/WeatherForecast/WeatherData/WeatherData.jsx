// src/components/WeatherData/WeatherData.jsx
import React from 'react';

function WeatherData({ day, conditions, time }) {
  return (
    <div>
      <h2>{day}</h2>
      <p><span>Conditions: </span>{conditions}</p>
      <p><span>Time: </span>{time}</p>
    </div>
  );
}

export default WeatherData;
