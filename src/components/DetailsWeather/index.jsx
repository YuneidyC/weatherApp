import React, { useEffect, useState } from 'react';

import './styles.css';

export function DetailsWeather(props) {
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');

    useEffect(() => {
        function addZero(number) {
            if (number < 10) {
                number = '0' + number;
            }
            return number;
        }
        let getSunrise = new Date(props.data.city.sunrise * 1000);
        setSunrise(
            addZero(getSunrise.getHours()) +
                ':' +
                addZero(getSunrise.getMinutes()) +
                ':' +
                addZero(getSunrise.getSeconds())
        );

        let getSunset = new Date(props.data.city.sunset * 1000);
        setSunset(
            addZero(getSunset.getHours()) +
                ':' +
                addZero(getSunset.getMinutes()) +
                ':' +
                addZero(getSunset.getSeconds())
        );
    }, []);

    return (
        <div className="currentWeather--details">
            <div className="currentWeather--details__sun">
                <div className="currentWeather--details__sun-sunrise">
                    <img
                        className="currentWeather--details__sun-sunrise__img"
                        src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-sunrise-weather-tulpahn-flat-tulpahn.png"
                        alt="sunrise"
                    />
                    <span className="currentWeather--details__sun-sunrise__time">
                        {sunrise}
                    </span>
                </div>
                <div className="currentWeather--details__sun-sunset">
                    <img
                        className="currentWeather--details__sun-sunset__img"
                        src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-sunset-weather-tulpahn-flat-tulpahn.png"
                        alt="sunset"
                    />
                    <span className="currentWeather--details__sun-sunset__time">
                        {sunset}
                    </span>
                </div>
            </div>
            <div className="currentWeather--details__current">
                <span className="currentWeather--details__current-temp">
                    {props.weather[0].main.temp}°
                </span>
                <span className="currentWeather--details__current-desc">
                    {props.weather[0].weather[0].description}
                </span>
            </div>
            <ul className="currentWeather--stats">
                <li className="currentWeather--stats__feels-like">
                    <span>Feels like </span>
                    <span>{props.weather[0].main.feels_like}°</span>
                </li>
                <li className="currentWeather--stats__wind">
                    <span>Wind </span>
                    <img
                        src="https://img.icons8.com/office/16/000000/wind--v1.png"
                        alt="wind"
                    />
                    <span>{' ' + props.weather[0].wind.speed} km/h</span>
                </li>
                <li className="currentWeather--stats__humidity">
                    <span>Humidity</span>
                    <span> {props.weather[0].main.humidity}%</span>
                </li>
            </ul>
            <div className="curreWeather--right">
                <div className="currentWeather--right__img">
                    <img
                        src={
                            'http://openweathermap.org/img/wn/' +
                            props.weather[0].weather[0].icon +
                            '@2x.png'
                        }
                        alt="Weather"
                    />
                </div>
                <div className="currentWeather--temperature">
                    <div className="currentWeather--temperature__high">
                        <span>{props.weather[0].main.temp_max}°</span>
                    </div>
                    <div className="currentWeather--temperature__low">
                        <span>{props.weather[0].main.temp_min}°</span>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}
