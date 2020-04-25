import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Data from './components/Data'
import Filter from './components/Filter'
import List from './components/List'
import './App.css'
import PersonForm from './components/PersonForm'


const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')


  const [ persons, setPersons ] = useState([]) 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])




  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterValue = {filterValue} setFilterValue = {setFilterValue} setPersons = {setPersons} persons = {persons}/>


      <h2>Add new</h2>

      <PersonForm newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber = {setNewNumber} setPersons ={setPersons} persons = {persons}/>



      <h2>Numbers</h2>
       <List persons = {persons}/>
     

    </div>
  )
}

export default App