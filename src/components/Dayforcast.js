import React, { useEffect, useState } from 'react'
import Daycard from './Daycard'
import './dayforcast.scss'
import { useSelector, useDispatch } from 'react-redux'
import {changecity} from '../slices/Cityslice'

function Dayforcast() {
    const [city, setCity] = useState();
    const [search, setSearch] = useState('');
    const state = useSelector(state=>state.city);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=88cb26a5b522b2e45a3773ba6d39ff72&units=metric`)
        .then(response => response.text())
        .then(res => {
            setCity(JSON.parse(res));
            console.log(JSON.parse(res));
            e.target.value = "";
        })
        .catch(err => console.log(err));
    ;
    },[state])
    function fetchData(e) {
        if (e.keyCode === 13) {
            
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=88cb26a5b522b2e45a3773ba6d39ff72&units=metric`)
                .then(response => response.text())
                .then(res => {
                    res = JSON.parse(res);
                    if (res.cod == 404) {
                        alert(res.message);
                        e.target.value = ''
                    }else{
                    dispatch(changecity(search))
                    setCity(JSON.parse(res));
                    console.log(JSON.parse(res));
                    e.target.value = "";
                    }
                })
                .catch(err => console.log(err));
            ;
            
        }
    }
    return (

        <div className="dayforcast">
            <h1>5-Day forcast</h1>
            <div className="dayforcast_body">
                <div className="city_input">
                    <input type="search" placeholder="city name" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={fetchData}></input>
                </div>
                <h2>{state}</h2>
                <div className="day_cards">
                    {
                        city?.list?.map((element, index) => {
                            if ((index+1) % 8 === 0 || (index+1) ===1) {
                                return (
                                    <Daycard info={element} city={city?.city} />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dayforcast
