import React, { useEffect } from "react";

import { Search } from "../Search";

import "./styles.css";

export const UserWeather = (props) => {

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}?lat=${props.latitude}&lon=${props.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then((res) => res.json())
            .then((res) => {
                    props.setData(res);
                    props.setWeather(res.list);
                    props.setFiveDays([]);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <section className="currentWeather" >
            {props.data &&
                <div className="currentWeather--nav">
                    <Search
                        setData={props.setData}
                        setWeather={props.setWeather}
                        setFiveDays={props.setFiveDays}
                    />
                    <h1>{props.data.city.name}, {props.data.city.country}</h1>
                </div>
            }
            {props.weather && props.children}
        </section>
    );
};
