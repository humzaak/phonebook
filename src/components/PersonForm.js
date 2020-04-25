import React, { useState, useEffect} from 'react'
import PersonService from '../services/persons'


const PersonForm = (props) => {

  

    const newName = props.newName
    const newNumber = props.newNumber
    const persons = props.persons
    const setPersons = props.setPersons
    const setNewName = props.setNewName
    const setNewNumber = props.setNewNumber
    console.log(setNewName)

    const addPerson = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
    
        if(newName.length == 0){
          return
        }
    
        const comparison = persons.filter(person=>person.name.toUpperCase()===newName.toUpperCase())
        if(comparison.length > 0)
        {
          console.log(newName)
          alert(`${newName} is already added to the phonebook`)
          setNewName('')
          return
    
        }
        const newPerson = {
          name: newName,
          number:newNumber
        }

        PersonService.create(newPerson)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })

      } 
    
      const handleValueChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
      }
    
    
      const handleValueNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
      }
    
     
   
   
   
     return (
        <form 
        onSubmit={addPerson}>
          <div>
            name: 
            <input  
            value = {props.newName}
            onChange={handleValueChange}
            />
          </div>
          <div>
            number: 
            <input  
            value = {props.newNumber}
            onChange={handleValueNumberChange}
            />
          </div>
  
  
          <div>
            <button type="submit">add</button>
          </div>
        </form>
     )
   }
   
   
   
   
   export default PersonForm