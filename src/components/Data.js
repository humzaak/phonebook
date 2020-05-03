import React from 'react'

const Data = (props) => {
  return (
    <li>{props.name} : {props.number}
    <button onClick={() => props.Delete(props.id)}>Delete</button>

    </li>
  )
}
//    "server": "json-server -p3001 --watch db.json"


export default Data