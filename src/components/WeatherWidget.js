import React, { useState } from "react";
import styles from "../styles/modules/WeatherWidget.module.css";

function WeatherWidget() {
    const [isOpen, setIsOpen] = useState(false);

    // Mock weather data
    const weatherData = {
        temperature: 19,
        precipitation: "Precipitations",
        maxTemp: 24,
        minTemp: 18,
        hourly: [
            { time: "15:00", temp: 19, icon: "🌧️" },
            { time: "16:00", temp: 18, icon: "🌦️" },
            { time: "17:00", temp: 17, icon: "🌧️" },
            { time: "18:00", temp: 18, icon: "🌧️" },
        ],
        date: "July 21",
    };

    const toggleWidget = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.widgetContainer}>
            {/* Weather Widget */}
            <div className={`${styles.widget} ${isOpen ? styles.open : ""}`}>
                <div
                    className={styles.toggleButton}
                    onClick={toggleWidget}
                    role="button"
                    aria-label="Toggle weather widget"
                >
                    {isOpen ? "❯" : "❮"}
                </div>
                <div className={styles.currentWeather}>
                    <div className={styles.weatherIcon}>🌧️</div>
                    <div className={styles.temperature}>
                        {weatherData.temperature}°
                    </div>
                    <div className={styles.details}>
                        <p>{weatherData.precipitation}</p>
                        <p>
                            Max {weatherData.maxTemp}° Min {weatherData.minTemp}°
                        </p>
                    </div>
                </div>
                <div className={styles.forecast}>
                    <p>Today</p>
                    <p>{weatherData.date}</p>
                    <div className={styles.hourlyForecast}>
                        {weatherData.hourly.map((hour, index) => (
                            <div key={index} className={styles.hour}>
                                <p>{hour.time}</p>
                                <p>{hour.icon}</p>
                                <p>{hour.temp}°</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherWidget;
