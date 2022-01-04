import React, { useEffect, useState } from 'react'
import './hourforcast.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux'
import { changecity } from '../slices/Cityslice'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function Hourforcast() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('');
    const state = useSelector(state => state.city);
    const dispatch = useDispatch();
    useEffect(() => {
        
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=88cb26a5b522b2e45a3773ba6d39ff72&units=metric`)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result);
                if (result.cod == 404) {
                    alert(result.message);
                    e.target.value = ''
                } else {
                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result?.city.coord.lat}&lon=${result?.city.coord.lon}&exclude=daily,minutely&units=metric&appid=88cb26a5b522b2e45a3773ba6d39ff72`)
                        .then(response => response.text())
                        .then(result => {
                            setCity(JSON.parse(result));
                            e.target.value = '';
                            console.log(JSON.parse(result));
                        });
                }


            })
            ;
    }, [state])
    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Hours',
                    color: '#911',
                    font: {
                        family: 'Comic Sans MS',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2,
                    },
                    padding: { top: 20, left: 0, right: 0, bottom: 0 }
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Temperature in Celsius',
                    color: '#191',
                    font: {
                        family: 'Times',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: { top: 30, left: 0, right: 0, bottom: 0 }
                }
            }
        },
        plugins: {

            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Hourly forcast',
                font: {
                    size: 18
                }
            },
        },
    };
    const labels = ['12 AM', '01  AM', '02  AM', '03  AM', '04  AM', '05  AM', '06  AM', '07  AM', '08  AM', '09  AM', '10  AM', '11  AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM', '10 PM', '11 PM'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Temperature',
                data: city?.hourly.map((data) => (
                    data.temp
                )),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    function fetchData(e) {
        if (e?.keyCode === 13) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=88cb26a5b522b2e45a3773ba6d39ff72&units=metric`)
                .then(response => response.text())
                .then(result => {
                    result = JSON.parse(result);
                    if (result.cod == 404) {
                        alert(result.message);
                        e.target.value = ''
                    } else {
                        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result?.city.coord.lat}&lon=${result?.city.coord.lon}&exclude=daily,minutely&units=metric&appid=88cb26a5b522b2e45a3773ba6d39ff72`)
                            .then(response => response.text())
                            .then(result => {
                                dispatch(changecity(search))
                                setCity(JSON.parse(result));
                                e.target.value = '';
                                console.log(JSON.parse(result));
                            });
                    }


                })
                ;
        }
    }
    return (
        <div className='hourforcast'>
            <h1>Hourly Forcast</h1>
            <div className="input__">
                <input onKeyDown={fetchData} type='search' placeholder='city name' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <div className="hourforcast_body">
                    <h1>{state}</h1>
                    <div className="hourforcast_body_info">
                        <h2>{city && new Date(city?.current.dt * 1000).toDateString()}</h2>
                        <Line options={options} data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hourforcast
