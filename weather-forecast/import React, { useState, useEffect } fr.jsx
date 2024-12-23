import axios from 'axios';
import React, { useEffect, useState } from 'react';

const WeatherApp = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('New York');
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5497002f29c8404d2dc581aac260feb`);
      setWeather(result.data);
    };
    fetchData();
  }, [city]);
  
  return (
    <div>
      <input type="text" placeholder="Enter a city" onChange={e => setCity(e.target.value)} />
      {weather.main && (
        <div>
          <h2>Weather in {city}:</h2>
          <p>Temperature: {weather.main.temp}°F</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
