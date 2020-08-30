import React from 'react'

const Person = ({ person, deletePerson }) => {
    return (
      <p key={person.name}>
        {person.name} {person.number}
        <button onClick={deletePerson}>Delete</button>
      </p>
    )
  }

  export default Person;