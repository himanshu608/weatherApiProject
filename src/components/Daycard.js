import React, { useEffect, useState } from 'react'
import './daycard.scss'
function Daycard({ info, city }) {
    const weatherback = [
        'https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/3240914/pexels-photo-3240914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ]
    const weatherName = ['Sunny', 'Cloudy', 'Rainy', 'Snowy']
    const [weather, setWeather] = useState();
    useEffect(() => {
        console.log(info?.weather[0].id)
        if (info?.main.temp_max < 0) {
            setWeather(3)
        } else {
            if (info?.weather[0].id >= 500 && info?.weather[0].id <= 531) setWeather(2);
            else if (info?.weather[0].id >= 600 && info?.weather[0].id <= 622) setWeather(3);
            else if (info?.weather[0].id >= 800 && info?.weather[0].id <= 802) setWeather(0);
            else if (info?.weather[0].id >= 803 && info?.weather[0].id <= 804) setWeather(1);
        }
    })
    return (
        <div className="daycard_body" style={{ backgroundImage: `url(${weatherback[weather]})` }}>
            <div className='daycard'>
                <h3>{new Date(info?.dt * 1000).toDateString()}</h3>
                <h1>{weatherName[weather]}</h1>
                <div className="daycard_info">
                    <span>{`High temperature : ${info?.main.temp_max} °C`}</span>
                    <span>{`Low temperature : ${info?.main.temp_min} °C`}</span>
                    <span>{`Latitude : ${city?.coord.lat}`}</span>
                    <span>{`Longitude :${city?.coord.lon}`}</span>
                    <span>{`Humidity  : ${info?.main.humidity} %`}</span>
                    <span>{`Sunrise : ${new Date(city?.sunrise * 1000).toLocaleTimeString()}`}</span>
                    <span>{`Sunset : ${new Date(city?.sunset * 1000).toLocaleTimeString()}`}</span>
                </div>

            </div>
        </div>
    )
}

export default Daycard
