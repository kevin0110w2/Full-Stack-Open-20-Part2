import React from 'react'
import Country from './Country'
import SingleCountry from './SingleCountry'

const Countries = ({ countries, searchText }) => {
  let allCountries;
  console.log('All Countries Beforehand', allCountries)
  if (countries !== undefined) {
    allCountries = countries.filter(country => country.name.toLowerCase().includes(searchText));
  }

  console.log('All Countries Afterhand', allCountries)

  if (searchText.length > 0) {
    if (allCountries.length > 10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    } else if (allCountries.length === 1) {
      return (
        <SingleCountry country={allCountries[0]} />
      )
    } else {
      return (
        allCountries.map(country =>
          <Country key={country.name} country={country} />)
      )
    }
  } 

  return (
    <div>

    </div>
  )
}

export default Countries;