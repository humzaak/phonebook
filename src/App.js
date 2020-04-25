import React, { useState } from 'react'
import Data from './components/Data'
import Filter from './components/Filter'
import List from './components/List'
import './App.css'
import PersonForm from './components/PersonForm'


const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')


  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 





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