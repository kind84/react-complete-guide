import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Paolo", age: 34 },
      { name: "Mary", age: 26 }
    ]
  })
  
  const [ messageState, setMessageState ] = useState({
    message: "Hello"
  })
  
  const switchNameHandler = (newName) => {
    // personsState.persons[1].name = "Maria"
    setPersonsState({
      persons: [
        { name: "Paolo", age: 34 },
        { name: newName, age: 26 }        
      ]
    })
  }

  const nameChangedHandler = (event) => {
    const p0 = {
      name: event.target.value,
      age: personsState.persons[0].age
    }
    setPersonsState({
      persons: [
        p0,
        personsState.persons[1]
      ]
    })
  }
  
  return (
    <div className="App">
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        change={nameChangedHandler}/>    
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        click={switchNameHandler.bind(this, 'Marie')}/>
      <p>{messageState.message}</p>
      <button onClick={switchNameHandler.bind(this, 'Maria')}>Switch Name</button>
    </div>
  )
}

export default App
