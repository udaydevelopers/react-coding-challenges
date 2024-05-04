import React, { useState, useEffect } from 'react';

const WeatherWidget = ({ location, apiKey }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeather({
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchWeather();
    }, [location, apiKey]);

    return (
        <div>
            {weather && (
                <>
                    <div>Temperature: {weather.temperature}°C</div>
                    <div>Description: {weather.description}</div>
                    <img src={weather.icon} alt="Weather Icon" />
                </>
            )}
        </div>
    );
};

export default WeatherWidget;
