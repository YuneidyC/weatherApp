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
import showerRain from './assets/images/showerRain.jpg'
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
        userDecisionTimeout: 5000,
    });

    function SwitchCase(props) {
        const background = document.getElementsByClassName('currentWeather')[0];
        const body = document.getElementsByTagName('body')[0];
    
        switch (props.value[0].weather[0].icon) {
            case '01d':
                background.style.backgroundImage = `url(${clearSkyDay})`;
                body.style.color = 'white';
                break;
            case '01n':
                background.style.backgroundImage = `url(${clearSkyNight})`;
                body.style.color = 'white';
                break;
            case '02d':
            case '03d':
            case '04d':
                background.style.backgroundImage = `url(${cloudsDay})`;
                body.style.color = 'white';
                break;
            case '02n':
            case '03n':
            case '04n':
                background.style.backgroundImage = `url(${cloudsNight})`;
                body.style.color = 'white';
                break;
            case '300':
            case '301':
            case '302':
            case '310':
            case '311':
            case '312':
            case '313':
            case '314':
            case '321':
                background.style.backgroundImage = `url(${drizzle})`;
                body.style.color = 'white';
                break;
            case '50d':
                background.style.backgroundImage = `url(${mist})`;
                body.style.color = 'white';
                break;
            case '09d':
                background.style.backgroundImage = `url(${showerRain})`;
                body.style.color = 'white';
                break;
            case '10d':
                background.style.backgroundImage = `url(${rain})`;
                body.style.color = 'white';
                break;
            case '11d':
                background.style.backgroundImage = `url(${thunderstorm})`;
                body.style.color = 'white';
                break;
            case '13d':
                background.style.backgroundImage = `url(${snowDay})`;
                body.style.color = 'black';
                break;
            case '13n':
                background.style.backgroundImage = `url(${snowNight})`;
                body.style.color = 'white';
                break;
            default:
                background.style.backgroundColor = "dimgray";
                body.style.color = 'white';
                break;
        }
    }

    return !isGeolocationEnabled ? (
        <CurrentWeather
            weather={weather}
            setWeather={setWeather}
            data={data}
            setData={setData}
            setFiveDays={setFiveDays}
            SwitchCase={SwitchCase}>
            {weather.length && (
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
            setFiveDays={setFiveDays}
            SwitchCase={SwitchCase}>
            {weather.length && (
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
