import React from "react";
import './styles.css';

export const Day = ({ weather, main, dt_txt }) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthName = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const iconLink = "http://openweathermap.org/img/wn/" + weather[0].icon + '@2x.png';

    return (
        <li className="day">
            <div className="day--date">
                <p>{weekday[(new Date(dt_txt.replace(" ", "T"))).getDay()]}</p>
                <p>{(new Date(dt_txt.replace(" ", "T"))).getDate() + " " + monthName[(new Date(dt_txt.replace(" ", "T"))).getMonth()]}</p>
            </div>
            <img className="day--weather" src={iconLink} alt="" />
            <div className="temperature--container">
                <div className="temperature--container__high">
                    <span>{main.temp_max}°</span>
                </div>
                <div className="temperature--container__low">
                    <span>{main.temp_min}°</span>
                </div>
            </div>
        </li>
    )
}
