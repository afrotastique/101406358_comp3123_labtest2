import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const apiKey = '453f20eef405b5cf6bbcf6a063b4a5d1';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}`;

        axios.get(apiUrl)
            .then(response => {
                // Handle the API response here
                setWeatherData(response.data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    // Render weather information
    return (
        <div>
            <h1>Weather Information</h1>
            {weatherData && (
                <div>
                    <p>Temperature: {weatherData.main.temp}</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    {/* */}
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;