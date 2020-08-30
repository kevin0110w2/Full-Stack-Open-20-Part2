import React from 'react'

const Language = ({ language }) => {
    return (
        <li key={language.name}>{language.name}</li>
    )
}

export default Language;