import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilterWord, setFilterWord] = useState('')

  useEffect(() => {
    console.log('Effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        console.log('data is ', response.data)
        setPersons(response.data)
      })
  }, [])


  const handleNameChange = (event) => {
    console.log('value ', event.target.value)
    setNewName(event.target.value)
  } 
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setFilterWord(event.target.value)  
  }

  const addPerson = (event) => {
    event.preventDefault()
    let isIncluded = false;
    for (let x in persons) {
      console.log('isIncluded is ', isIncluded)
      if (persons[x].name === newName) {
        isIncluded = true;
      }
    } 
    if (isIncluded){
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName ,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
    }
  setNewName('')
  setNewNumber('')
  }
  
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilterWord.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilterWord} eventHandler={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm submitHandler={addPerson} newName={newName} newNum={newNumber} 
                  nameHandler={handleNameChange} numberHandler={handleNumberChange} />
      <h3>Numbers</h3>        
      <Persons names={namesToShow} />
    </div>
  )
}

export default App