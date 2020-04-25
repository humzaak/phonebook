import React, { useState } from 'react'
import Data from './Data'


const List = (props) => {

const persons = props.persons
console.log(persons)
  return (
    <ul>
    {
    
    persons.map 
     ((person)=>
    <Data key={person.name} name= {person.name} number={person.number}/>
    )
    
    }
    </ul>
  )
}




export default List