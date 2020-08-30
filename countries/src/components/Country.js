import React, { useState, useEffect } from 'react'
import Button from './Button'
import SingleCountry from './SingleCountry'

const Country = ({ country }) => {
    const [shownCountry, setShownCountry] = useState('')
  
    const handleClick = () => {
      setShownCountry(country)
    }
  
    if (shownCountry !== '') {
      return (
        <SingleCountry country={shownCountry} />
      )
    } else {
      return (
        <div>
          {country.name} <Button handleClick={handleClick} text="show" />
        </div>
      )
    }
  }

  export default Country;