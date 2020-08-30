import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    // console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  // console.log('render', countries.length, 'countries')

  const handleSearchText = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <>
      <div>
        find countries <input value={searchText} onChange={handleSearchText} />
      </div>
      <Countries countries={countries} searchText={searchText} />
    </>
  );
}

export default App;
