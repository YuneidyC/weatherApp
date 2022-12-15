import React, { useState } from 'react';

import './styles.css';

export const Search = (props) => {
    const [query, setQuery] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const cityAndCountryCode = query
            .split(',');

        if (query) {
            const response = await fetch(
                `${process.env.REACT_APP_API}?q=${cityAndCountryCode[0]}, ${cityAndCountryCode[1]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
            );
            if (response.status === 200) {
                const newForecast = await response.json();
                props.setData(newForecast);
                props.setWeather(newForecast.list);
                props.setFiveDays([]);
                setError(false);
                setQuery('');
            } else {
                setQuery('');
                setError(true);
            }
        }
    };

    return (
        <form action="" onSubmit={onSubmit} className="Search">
            <div className="Search__container">
                <div className="Search__container__box">
                    <input
                        id="input"
                        type="text"
                        placeholder="e.g. London, GB"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <span></span>
                </div>
                {error && query.length <= 0 ? (
                    <span className="currentWeather--nav-search__span">
                        {'Invalid input'}
                    </span>
                ) : (
                    ''
                )}
            </div>
        </form>
    );
};
