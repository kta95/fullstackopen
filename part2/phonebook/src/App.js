import React, { useState, useEffect } from 'react'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Person'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilterWord, setFilterWord] = useState('')

  useEffect(() => {
    console.log('Effect')
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
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
    let nameExisted = false;
    let numberExisted = false;
    let id = 0;
    if ( newName !== '' && newNumber !== '') {
      for (let x in persons) {
        console.log('isIncluded is ', nameExisted, numberExisted)
        if (persons[x].name === newName) {
          id = persons[x].id;
          if (persons[x].number === newNumber) {
            numberExisted = true;
          }
          nameExisted = true;
        }
      } 
      if (nameExisted && numberExisted){
        alert(`${newName} is already added to phonebook`)
      } else if (nameExisted) {
        const person = persons.find(p => p.id === id);
        const changePerson = { ...person, number: newNumber}
        if(window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
          personService
            .update(id, changePerson)
            .then(returnPerson => {
              setPersons(persons.map(person => person.id !== id ? person : returnPerson))
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              alert(
                `the person '${person.name}' was already deleted from the server`
              )
              setPersons(persons.filter( p => p.id !== id))
              }
            )
          }
      } else {
        const newPerson = {
          name: newName ,
          number: newNumber
        }
        personService
          .create(newPerson)
          .then(returnPerson => {
            setPersons(persons.concat(returnPerson))
            setNewName('')
            setNewNumber('')
          })   
      }
    } else {
      alert (
        `name and number cannot be empty!`
      )
    }
    
  }
  const handleDelete = (id, name) => {
    console.log('id is', id)
      if(window.confirm(`Delete ${name} ?`)) {
        personService
          .deletePerson(id)
          .then( () => {
            setPersons(persons.filter(person => person.id !== id))
            }
          )
      
      }
  }
  console.log('persons is', persons)
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilterWord.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilterWord} eventHandler={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm submitHandler={addPerson} newName={newName} newNum={newNumber} 
                  nameHandler={handleNameChange} numberHandler={handleNumberChange} />
      <h3>Numbers</h3>    
      {namesToShow.map((person) => 
        <Persons key={person.id} person={person} 
          deletePerson={() => handleDelete(person.id, person.name)} />
      )}
    </div>
  )
}

export default App