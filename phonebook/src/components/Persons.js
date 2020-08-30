import React, { useState, useEffect } from 'react'
import Person from './Person'
import phoneBookService from '../services/phonebook'

const Persons = ({ persons, searchName, setPersons }) => {
  let personas = persons;

  if (searchName !== '') {
    personas = persons.filter(
      person => person.name.toLowerCase().includes(searchName.toLowerCase()));
  }

  // console.log('personas', personas)
  // console.log('persons', persons)
  const deleteAPerson = (id) => {
    const thePerson = personas.find(person => person.id === id)
    const peeps = persons.filter(person => person.id !== id)

    if (window.confirm(`Delete ${thePerson.name}?`)) {
      phoneBookService
        .deletePerson(id)
        .then(people => {
          setPersons(peeps)
        })
        .catch(error => {
          alert(
            `the person '${thePerson}' was already deleted from server`
          )
          setPersons(peeps)
        })
    }
  }

  return (
    personas.map(person =>
      <Person key={person.name} person={person} deletePerson={() => deleteAPerson(person.id)} />
    )
  )
}

export default Persons;