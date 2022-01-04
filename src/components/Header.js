import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="header" >
                <Link to='/' style={{color:'white',textDecoration:'none'}} >
                <div className="header_logo">
                <img src='https://banner2.cleanpng.com/20180414/pkq/kisspng-weather-computer-icons-weather-5ad204f41ba772.4298522015237132681133.jpg' alt='weather'></img>
                <h2>WeatherApp</h2>
                </div>
                </Link>
                <div className="header_menu">
                        <Link to='/' style={{ textDecoration: 'none',color: 'white' }}><h3>5-day forecast</h3></Link>
                        <Link to='/hour' style={{ textDecoration: 'none',color: 'white' }}><h3>Hourly forecast</h3></Link>
                </div>
        </div>
    )
}

export default Header
