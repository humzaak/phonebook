import React, { useState } from 'react'
import PersonForm from './PersonForm'



const Filter = (props) => {

    const setPersons = props.setPersons
    const filterValue = props.filterValue
    const setFilterValue = props.setFilterValue
    const persons = props.persons

 const handleFilterValueChange = (event) => {
   setFilterValue(event.target.value)

    if(filterValue.length == 0)
    {
      setPersons(persons)
    }
    else{
    const checkFilter = persons.filter(person=>person.name.toUpperCase().includes(props.filterValue.toUpperCase()))
   setPersons(checkFilter)
  
  }
  }



  return (
    <form>
     <div>filter shown by: <input 
      value = {filterValue}
      onChange={handleFilterValueChange}    
     /></div> 
    </form>
  )
}




export default Filter