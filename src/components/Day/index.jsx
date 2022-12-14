import React from 'react';

import './styles.css';

export const Day = (props) => {
    const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const monthName = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ];
    const iconLink =
        'http://openweathermap.org/img/wn/' +
        props.day.weather[0].icon +
        '@2x.png';

    return (
        <li className="day">
            <div className="day--date">
                <p>
                    {
                        weekday[
                            new Date(
                                props.day.dt_txt.replace(' ', 'T')
                            ).getDay()
                        ]
                    }
                </p>
                <p>
                    {new Date(props.day.dt_txt.replace(' ', 'T')).getDate() +
                        ' ' +
                        monthName[
                            new Date(
                                props.day.dt_txt.replace(' ', 'T')
                            ).getMonth()
                        ]}
                </p>
            </div>
            <img className="day--weather" src={iconLink} alt="" />
            <div className="temperature--container">
                <div className="temperature--container__high">
                    <span>{props.day.main.temp_max}°</span>
                </div>
                <div className="temperature--container__low">
                    <span>{props.day.main.temp_min}°</span>
                </div>
            </div>
        </li>
    );
};
