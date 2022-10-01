import React from "react";
import { Day } from "../Day";
import { useApi } from "../../context/ApiContext";
import ReactLoading from "react-loading";
import './styles.css';

export const ListDays = () => {
    const data = useApi();
    let fiveDays = [];

    if (!data) {
        return (
            <div className="loading--container">
                <ReactLoading
                    type="spinningBubbles"
                    color="#58a4d5"
                    height={50}
                    width={50}
                />
            </div>
        )
    }

    fiveDays.push(data.list[0]);

    for (let i = 1; i < data.list.length; i++) {
        const element = data.list[i];
        const date = new Date((element.dt_txt).replace(" ", "T"));
        const arrayDate = new Date((fiveDays[fiveDays.length - 1].dt_txt).replace(" ", "T"));

        if (arrayDate.getDay() !== date.getDay()) {
            fiveDays.push(element);
        }
    }

    return (
        <div className="daily">
            <p className="daily--next-days">Next Days</p>
            <div></div>
            <div className="daily--list__container">
                <ul className="daily--list">
                    {fiveDays.map((day, id) => <Day key={id} {...day} />)}
                </ul>
            </div>
        </div>
    )
}
