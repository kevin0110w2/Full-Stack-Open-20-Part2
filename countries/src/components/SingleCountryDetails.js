import React from 'react'
import Language from './Language'

const SingleCountryDetails = ({ country }) => {
    return (
      <div>
        <h1>
          {country.name}
        </h1>
        <p>
          capital {country.capital}
        </p>
        <p>
          population {country.population}
        </p>
        <h2>
          languages
      </h2>
        <ul>
          {country.languages.map(language =>
            <Language key={language.name} language={language} />
          )}
        </ul>
        <img src={country.flag} alt="flag" height="100px" width="200px" />
      </div>
    )
  }
  
  export default SingleCountryDetails;