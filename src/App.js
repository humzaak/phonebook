import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Data from './components/Data'
import Filter from './components/Filter'
import List from './components/List'
import './App.css'
import PersonForm from './components/PersonForm'
import PersonService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  const [errorMessage, seterrorMessage]  = useState(null)

  const [ persons, setPersons ] = useState([]) 

  useEffect(() => {
    console.log('effect')
    PersonService.getAll()
      .then(allNames => {
        console.log('promise fulfilled')
        setPersons(allNames)
      })
  }, [])

  const deleteName = (id) => { 
   const toBeDeleted =  persons.filter((person)=>person.id === id)
    if (window.confirm(`Delete ${toBeDeleted[0].name}  ?`)) { 
      PersonService.deleteData(id)
      .then(returnedNote => {
        PersonService.getAll()
        .then(allNames => {
          console.log('promise fulfilled')
          setPersons(allNames)
        })
      })
      .catch(error=> {
          seterrorMessage("This value is not on server")
          setTimeout(()=>seterrorMessage(null),3000)
          setPersons(persons.filter(person=>person.id !== id))
          }
      )
    }
   

   
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterValue = {filterValue} setFilterValue = {setFilterValue} setPersons = {setPersons} persons = {persons}/>


      <h2>Add new</h2>
      <Notification message = {errorMessage}/>
      <PersonForm newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber = {setNewNumber} setPersons ={setPersons} persons = {persons}/>



      <h2>Numbers</h2>
       <List persons = {persons} Delete = {deleteName}/>
     

    </div>
  )
}

export default App