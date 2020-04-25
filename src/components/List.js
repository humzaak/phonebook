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
    <Data key={person.name} id={person.id} name= {person.name} number={person.number} Delete = {props.Delete}/>

    )
    
    }
    </ul>
  )
}




export default List