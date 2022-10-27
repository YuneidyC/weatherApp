import React, { createContext, useState, useEffect } from "react";

const APIContext = createContext({});

function ApiContextProvider({ children }) {
    const [data, setData] = useState(null);
    const [toggled, setToggled] = useState(null);
    // useEffect(() => {
    //     fetch('https://ipapi.co/json/')
    //     .then(response => response.json())
    //     .then(weather => {
    //         return weather.country_name;
    //     })
    //     .then(value => {
    //         const fetchData = async () => {
    //             const response = await fetch(`${process.env.REACT_APP_API}?q=${value}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    //             const newData = await response.json();
    //             setData(newData);
    //         };
    //         fetchData();
    //     })
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}?q=Ireland&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
            const newData = await response.json();
            setData(newData);
        };
        fetchData();
    }, []);

    const handleClick = () => {
        setToggled((s) => !s);
        if (!toggled) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    return (
        <APIContext.Provider value={{
            data,
            handleClick,
            toggled,
        }}>
            {children}
        </APIContext.Provider>
    )
};



export { APIContext, ApiContextProvider };
