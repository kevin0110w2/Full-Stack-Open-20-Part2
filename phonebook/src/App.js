import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'
import phoneBookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNo, setNewNo] = useState('')
  const [searchName, setSearchName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNo
    }

    const containsPerson = (persons.find(person => person.name.toLowerCase() === newName.toLowerCase()) !== undefined)
    // console.log('Contains or not', containsPerson)

    if (containsPerson) {
      if (window.confirm(`'${newName}' is already added to phonebook, replace the old number with a new one?`)) {
        const alreadyAdded = (persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()))
        // console.log('Already', alreadyAdded)
        // console.log('newPerson', newPerson)
        const people = (persons.filter(person => person.name.toLowerCase() !== newName.toLowerCase()))
        phoneBookService
          .update(alreadyAdded[0].id, newPerson)
          .then(newPerson => {
            setPersons(people.concat(newPerson))
            setNewName('')
            setNewNo('')

            setMessage(
              `Updated ${newPerson.name}`
            )
            setErrorMessage('')
          })
          .catch(error => {
            console.log('Error', error)
            setErrorMessage(
              `Information of ${newPerson.name} has already been removed from server`
            )
            setMessage('')
          })

        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    } else {

      phoneBookService
        .create(newPerson)
        .then(newPerson => {
          console.log('New Person', newPerson)
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNo('')
        })

      setMessage(
        `Added ${newPerson.name}`
      )
      setErrorMessage('')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNoChange = (event) => {
    setNewNo(event.target.value)
  }

  const handleSearchedNameChange = (event) => {
    setSearchName(event.target.value)
  }

  // initial state of the data is fetched from the server using the axios-library
  useEffect(() => {
    phoneBookService
      .getAll()
      .then(people => {
        setPersons(people)
      })
  }, [])


  return (
    <>
      <h1>Phonebook</h1>
      <ErrorNotification message={errorMessage} />
      <Notification message={message} />
      <Filter
        value={searchName}
        onChange={handleSearchedNameChange}
      />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNo={newNo}
        handleNoChange={handleNoChange}
      />
      <h2>Numbers</h2>
      <Persons
        key={persons}
        persons={persons}
        searchName={searchName}
        setPersons={setPersons}
      />
    </>
  )
}

export default App;