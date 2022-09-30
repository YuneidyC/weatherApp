import React from "react";
import './styles.css';

export const Day = ({weather, main, dt_txt}) => {
    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const monthName = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const iconLink = "http://openweathermap.org/img/wn/" + weather[0].icon + '@2x.png';
    
    return (
        <li className="day">
            <div className="day--date">
                <p>{weekday[(new Date(dt_txt.replace(" ", "T"))).getDay()]}</p>
                <p>{(new Date(dt_txt.replace(" ", "T"))).getDate() + " " + monthName[(new Date(dt_txt.replace(" ", "T"))).getMonth()]}</p>
            </div>
            <img className="day--weather" src={iconLink} alt="" />
            <div className="temperature">
                <img className="temperature--high" src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-up.png" alt="top arrow"/>
                <span>{main.temp_max}°</span>
            </div>
            <div className="temperature">
                <img className="temperature--low" src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-down.png" alt="down arrow"/>
                <span>{main.temp_min}°</span>
            </div>
        </li>
    )
}
