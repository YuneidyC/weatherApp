import React, { useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import ReactLoading from 'react-loading';

import { UserWeather } from './components/UserWeather';
import { DetailsWeather } from './components/DetailsWeather';
import { Day } from './components/Day';
import { ListDays } from './components/listDays';
import { CurrentWeather } from './components/CurrentWeather';

function App() {
    const [weather, setWeather] = useState([]);
    const [data, setData] = useState('');
    const [fiveDays, setFiveDays] = useState([]);
    const { coords, isGeolocationEnabled } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    return !isGeolocationEnabled ? (
        <CurrentWeather
            weather={weather}
            setWeather={setWeather}
            data={data}
            setData={setData}
            setFiveDays={setFiveDays}>
            {weather.length && (
                <div className="Weather-App">
                    <DetailsWeather
                        data={data}
                        weather={weather}></DetailsWeather>
                    <ListDays
                        weather={weather}
                        fiveDays={fiveDays}
                        setFiveDays={setFiveDays}>
                        {fiveDays.map((day) => (
                            <Day day={day} />
                        ))}
                    </ListDays>
                </div>
            )}
        </CurrentWeather>
    ) : coords ? (
        <UserWeather
            latitude={coords.latitude}
            longitude={coords.longitude}
            weather={weather}
            setWeather={setWeather}
            data={data}
            setData={setData}
            setFiveDays={setFiveDays}>
            {weather.length && (
                <div className="Weather-App">
                    <DetailsWeather
                        data={data}
                        weather={weather}></DetailsWeather>
                    <ListDays
                        weather={weather}
                        fiveDays={fiveDays}
                        setFiveDays={setFiveDays}>
                        {fiveDays.map((day) => (
                            <Day day={day} />
                        ))}
                    </ListDays>
                </div>
            )}
        </UserWeather>
    ) : (
        <div className="loading--container">
            <ReactLoading
                type="spinningBubbles"
                color="#58a4d5"
                height={50}
                width={50}
            />
        </div>
    );
}

export default App;
