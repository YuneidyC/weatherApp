import React from "react";
import './styles.css';
import { useApi } from '../../context/ApiContext';
import { ListDays } from "../listDays";

export const CurrentWeather = () => {
    const data = useApi();
    const weather = [];

    if (!data) {
        return <p>Loading...</p>
    }

    function darkTheme() {
        let element = document.body;
        element.classList.toggle("dark-mode");

        chngImg();

        let currentWeatherDetails = document.getElementsByClassName('currentWeather--details')[0];
        currentWeatherDetails.classList.toggle("dark-mode--currentWeather--details");

        let currentWeather = document.getElementsByClassName('currentWeather')[0];
        currentWeather.classList.toggle("dark-mode--currentWeather");

        let allDays = document.getElementsByClassName('daily--list')[0];
        let todayWeather = allDays.childNodes[0];
        todayWeather.style.background = '#73b7da';
        todayWeather.classList.toggle("dark-mode--currentDay");
    }

    function chngImg() {
        let buttonDark = document.getElementsByClassName('toggle')[0];
        if (!document.getElementsByClassName('dark-button')[0]) {
            buttonDark.classList.toggle('dark-button');
            buttonDark.src = "https://img.icons8.com/material-sharp/24/000000/toggle-on.png";
        } else {
            buttonDark.classList.toggle('dark-button');
            buttonDark.src = "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/FFFFFF/external-toggle-user-interface-smashingstocks-glyph-smashing-stocks.png";
        }
    }

    function addZero(number) {
        if (number < 10) {
            number = "0" + number; 
        }
        return number;
    }

    data.list.map((day) => weather.push(day));

    let getSunrise = new Date(data.city.sunrise * 1000);
    let sunrise = addZero(getSunrise.getHours()) + ":" + addZero(getSunrise.getMinutes()) + ":" + addZero(getSunrise.getSeconds());

    let getSunset = new Date(data.city.sunset * 1000);
    let sunset = addZero(getSunset.getHours()) + ":" + addZero(getSunset.getMinutes()) + ":" + addZero(getSunset.getSeconds());

    return (
        <section className="currentWeather">
            <div className="currentWeather--nav">
                <button onClick={darkTheme}>
                    <img className="toggle" src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/FFFFFF/external-toggle-user-interface-smashingstocks-glyph-smashing-stocks.png" alt="toggle dark" />
                </button>
                <h1>{data.city.name}</h1>
            </div>
            <div className="currentWeather--details">
                <div className="currentWeather--details__sun">
                    <div className="currentWeather--details__sun-sunrise">
                    <img className="currentWeather--details__sun-sunrise__img" src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-sunrise-weather-tulpahn-flat-tulpahn.png" alt="sunrise"/>
                    <span className="currentWeather--details__sun-sunrise__time">{sunrise}</span>
                    </div>
                    <div className="currentWeather--details__sun-sunset">
                    <img className="currentWeather--details__sun-sunset__img" src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-sunset-weather-tulpahn-flat-tulpahn.png" alt="sunset" />
                    <span className="currentWeather--details__sun-sunset__time">{sunset}</span>
                    </div>
                </div>
                <div className="currentWeather--details__current">
                    <span className="currentWeather--details__current-temp">{weather[0].main.temp}°</span>
                    <span className="currentWeather--details__current-desc">{weather[0].weather[0].description}</span>
                </div>
                <ul className="currentWeather--stats">
                    <li className="currentWeather--stats__feels-like">
                        <span>Feels like</span>
                        <span> {weather[0].main.feels_like}°</span>
                    </li>
                    <li className="currentWeather--stats__wind">
                        <span>Wind </span>
                        <img src="https://img.icons8.com/office/16/000000/wind--v1.png" alt="wind" />
                        <span>{" " + weather[0].wind.speed} km/h</span>
                    </li>
                    <li className="currentWeather--stats__humidity">
                        <span>Humidity</span>
                        <span> {weather[0].main.humidity}%</span>
                    </li>
                </ul>
                <div className="currentWeather--img">
                    <img src={"http://openweathermap.org/img/wn/" + weather[0].weather[0].icon + '@2x.png'} alt="Weather" />
                </div>
            </div>
            <ListDays />
        </section>
    )
}
