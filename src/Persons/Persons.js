import React from 'react'

const Persons = props => props.persons.map((person, index) => {
  return (
    <Person 
      click={props.clicked(index)}
      name={person.name} 
      age={person.age}
      key={person.id}
      change={(event) => props.changed(event, person.id)}
    />    
  )
})

export default Persons