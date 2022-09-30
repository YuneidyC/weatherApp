import React, { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext({});

export const ApiContextProvider = ( { children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}?lat=53.350140&lon=-6.266155&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(weather => {
            setData(weather);
        });
    }, []);
    
    return (
        <APIContext.Provider value={data}>
            {children}
        </APIContext.Provider>
    )
};

export const useApi = () => {
    const context = useContext(APIContext);
    if(context === undefined) {
        throw new Error('Required');
    }

    return context;
}
