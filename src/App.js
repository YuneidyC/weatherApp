import React, { useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import ReactLoading from 'react-loading';

import { UserWeather } from './components/UserWeather';
import { DetailsWeather } from './components/DetailsWeather';
import { Day } from './components/Day';
import { ListDays } from './components/ListDays';
import { CurrentWeather } from './components/CurrentWeather';

import cloudsDay from './assets/images/clouds.jpg';
import cloudsNight from './assets/images/cloudsNight.jpg';
import rain from './assets/images/rain.jpg'
import mist from './assets/images/mist.jpg'
import drizzle from './assets/images/drizzle.jpg'
import snowDay from './assets/images/snowDay.jpg';
import snowNight from './assets/images/snowNight.jpg';
import thunderstorm from './assets/images/thunderstorm.jpg';
import clearSkyDay from './assets/images/clearSkyDay.jpg';
import clearSkyNight from './assets/images/clearSkyNight.jpg';

function App() {
    const [weather, setWeather] = useState([]);
    const [data, setData] = useState('');
    const [fiveDays, setFiveDays] = useState([]);

    const { coords, isGeolocationEnabled } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 6000,
    });

    function SwitchCase(props) {
        const background = document.getElementsByClassName('currentWeather')[0];
        const search = document.getElementsByClassName('Search__container__box')[0];
        const body = document.getElementsByTagName('body')[0];

        if (search) {
            changeColorSearchAndBody(search, props.value[0].weather[0].icon, body);
        }

        switch (props.value[0].weather[0].icon) {
            case '01d':
                background.style.backgroundImage = `url(${clearSkyDay})`;
                break;
            case '01n':
                background.style.backgroundImage = `url(${clearSkyNight})`;
                break;
            case '02d':
            case '03d':
            case '04d':
                background.style.backgroundImage = `url(${cloudsDay})`;
                break;
            case '02n':
            case '03n':
            case '04n':
                background.style.backgroundImage = `url(${cloudsNight})`;
                break;
            case '09d':
            case '09n':
                background.style.backgroundImage = `url(${drizzle})`;
                break;
            case '50d':
            case '50n':
                background.style.backgroundImage = `url(${mist})`;
                break;
            case '10d':
            case '10n':
                background.style.backgroundImage = `url(${rain})`;
                break;
            case '11d':
            case '11n':
                background.style.backgroundImage = `url(${thunderstorm})`;
                break;
            case '13d':
                background.style.backgroundImage = `url(${snowDay})`;
                break;
            case '13n':
                background.style.backgroundImage = `url(${snowNight})`;
                break;
            default:
                background.style.backgroundImage = 'none';
                background.style.backgroundColor = 'dimgray';
                break;
        }
    }

    function changeColorSearchAndBody(search, caseImage, body) {
        let color;
        if (caseImage === '13d') {
            color = "black";
        } else {
            color = "white";
        }

        body.style.color = color;
        search.firstChild.style.borderColor = color;
        search.firstChild.style.setProperty('--textColor', color);
        search.lastChild.style.borderColor = color;
        search.lastChild.style.setProperty('--textColor', color);
    }

    return !isGeolocationEnabled ? (
        <CurrentWeather
            weather={weather}
            setWeather={setWeather}
            data={data}
            setData={setData}
            setFiveDays={setFiveDays}
            SwitchCase={SwitchCase}>
            {weather.length > 0 && (
                <div className="Weather-App">
                    <SwitchCase value={weather} />
                    <DetailsWeather
                        data={data}
                        weather={weather}>
                    </DetailsWeather>
                    <ListDays
                        weather={weather}
                        fiveDays={fiveDays}
                        setFiveDays={setFiveDays}>
                        {fiveDays.map((day, keyDay) => (
                            <Day day={day} key={keyDay} />
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
            setFiveDays={setFiveDays}
            SwitchCase={SwitchCase}>
            {weather.length > 0 && (
                <div className="Weather-App">
                    <SwitchCase value={weather} />
                    <DetailsWeather
                        data={data}
                        weather={weather}>
                    </DetailsWeather>
                    <ListDays
                        weather={weather}
                        fiveDays={fiveDays}
                        setFiveDays={setFiveDays}>
                        {fiveDays.map((day, keyDay) => (
                            <Day day={day} key={keyDay} />
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
