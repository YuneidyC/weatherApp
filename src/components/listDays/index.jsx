import React from "react";
import { Day } from "../Day";
import { useApi } from "../../context/ApiContext";
import './styles.css';

export const ListDays = () => {
    const data = useApi();
    let fiveDays = [];

    if(!data) {
        return <p>Loading...</p>
    }

    fiveDays.push(data.list[0]);

    for (let i = 1; i < data.list.length; i++) {
        const element = data.list[i];
        const date = new Date((element.dt_txt).replace(" ", "T"));
        const arrayDate = new Date((fiveDays[fiveDays.length - 1].dt_txt).replace(" ", "T"));

        if(arrayDate.getDay() !== date.getDay()) {
            fiveDays.push(element);
        }
    }
    
    return (
        <div className="daily">
            <p className="daily--next-days">Next Days</p>
            <div></div>
            <ul className="daily--list">
                {fiveDays.map((day, id) => <Day key={id} {...day} />)}
            </ul>
        </div>
    )
}
