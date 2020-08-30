import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleCountryDetails from './SingleCountryDetails'
import CapitalDetails from './CapitalDetails'

const SingleCountry = ({ country }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [capital, setCapital] = useState([])

    useEffect(() => {
        axios
            .get("http://api.weatherstack.com/current?access_key=" + api_key + "&query=" + country.capital)
            .then(response => {
                setCapital(response.data)
            })
    })

    // console.log('react app api key', api_key)
    // console.log('Country', country)
    // console.log('Capital', capital)
    if (capital.current !== undefined) {
        return (
            <div>
                <SingleCountryDetails country={country} />
                <CapitalDetails capital={capital} />
            </div>
        )
    } else {
        return (
            <div>
                <SingleCountryDetails country={country} />
            </div>
        )
    }
}

export default SingleCountry;