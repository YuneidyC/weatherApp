import React, { useState, useRef, useEffect } from 'react';

import './styles.css';

export const Search = (props) => {
    const [query, setQuery] = useState(false);
    const [error, setError] = useState(false);
    const [isFocused, setIsFocused] = useState('');
    const ref = useRef(null);

    useEffect(() => {
        ref.current.placeholder = isFocused;
      }, [isFocused]);

      function setIsFocusedDelayed(params) {
        const root = getComputedStyle(document.body);
        setTimeout(() => setIsFocused(params), root.getPropertyValue('--transition').match(/[\d\.]+|\D+/g)[0] * 1000);
      }

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
                        onChange={(e) => setQuery(e.target.value)}
                        ref={ref}
                        onFocus={() => setIsFocusedDelayed('e.g. London, GB')}
                        onBlur={() => setIsFocused('')}
                        aria-label="lorem ipsum"
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
