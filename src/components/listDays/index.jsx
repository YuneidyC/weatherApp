import React, { useEffect } from "react";

import './styles.css';

export const ListDays = (props) => {

    useEffect(() => {
        let prevDate = new Date(Date.now()).toISOString().split("T")[0];
        const days = [...props.fiveDays];
        for (let i = 0; i < props.weather.length; i++) {
            const elementDate = props.weather[i].dt_txt.split(" ")[0];
            if (elementDate !== prevDate) {
                if (!days.includes(props.weather[i])) {
                    days.push(props.weather[i]);
                    props.setFiveDays(days);
                }
            }
            prevDate = elementDate;
        }

    }, [props]);

    return (
        <div className="daily">
            <p className="daily--next-days">Next Days</p>
            <div></div>
            <div className="daily--list__container">
                <ul className="daily--list">
                    {props.children}
                </ul>
            </div>
        </div>
    )
}
