import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [city, setCity] = useState('SURAT');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const API_KEY = "d0861527e905ea1783bdcc12ae8f6655";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  useEffect(() => {
    console.log('Fetching weather data for:', city); 
    fetchWeatherData(city);
  }, [city]);
  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={setCity} />
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
};

export default App;
