import React from 'react'

const CapitalDetails = ({ capital }) => {
    return (
        <div>
            <h3>
                Weather in {capital.location.name}
            </h3>
            <p><b>temperature: </b>{capital.current.temperature} Celsius</p>
            <img src={capital.current.weather_icons[0]} alt="weather icon" height="50px" width="50px" />
            <p><b>wind: </b>{capital.current.wind_speed} mph direction {capital.current.wind_dir}</p>
        </div>
    )
}

export default CapitalDetails;