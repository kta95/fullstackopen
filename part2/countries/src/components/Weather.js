import React, { useState, useEffect } from "react"
import axios from 'axios'
import WeatherData from "./WeatherData"
const Weather = ({city}) => {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY  // this doesn't work
    useEffect (() => {
        axios.get(`http://api.weatherstack.com/current?access_key=0d36bc816062313240728edc2fba3b8d&query=${city}`)
            .then(response => {
            console.log('key', api_key)
            console.log('data is', response.data)
            setWeather(response.data)
        })
    }
    , [])
    console.log('weather is', weather.current)
    return (
        <WeatherData city={city} weather={weather.current} />
    )
}

export default Weather