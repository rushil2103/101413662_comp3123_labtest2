import React from 'react';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherDetails } = weather;
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {Math.round(main.temp - 273.15)}°C</p>
      <p>Condition: {weatherDetails[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherCard;
