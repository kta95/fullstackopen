import React, { useState, useEffect } from "react"
import axios from 'axios'
import Countries from "./components/Countries"

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [newFilterCountry, setfilterCountry] = useState('')

  useEffect(() => {
    console.log('Effect')
    axios
      .get('https://restcountries.eu/rest/v2/all').then(response => {
        console.log('rest api data is', response.data)
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setfilterCountry(event.target.value)
  }

  const handleButtonClick = (event) => {
    setfilterCountry(event.target.attributes.country.value)
  }

  const cNameToShow = countries.filter(country => country.name.toLowerCase().includes(newFilterCountry.toLowerCase()))
  
  return (
    <div>
      <p>find countries <input value={newFilterCountry} onChange={handleFilterChange}/> </p>
      <Countries names={cNameToShow} buttonHandler={handleButtonClick} value={newFilterCountry} />
    </div>
  )
}

export default App;
