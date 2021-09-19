const WeatherData = ({city, weather}) => {
    if (!weather) {
        return (
            <div></div>
        )
    }
    console.log('temp is', weather)
    return (
        <>
        <h3>Weather in {city}</h3>
        <b>temperature: </b> {weather.temperature}<br/>
        <img src={weather.weather_icons[0]} alt="Weather Icon"/><br/>
        <b>wind: </b>{weather.wind_speed} mph direction {weather.wind_dir}
        </>
    )

}

export default WeatherData