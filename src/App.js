import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

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

  const [ usersState, setUsersState ] = useState({
    users: [
      { username: "kind84", password: "Hello!" },
      { username: "mary92", password: "Zeus?" }
    ]
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

  const usernameChangedHandler = (event) => {
    const u0 = {
      username: event.target.value,
      password: usersState.users[0].password
    }
    setUsersState({
      users: [
        u0,
        usersState.users[1]
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
      <br></br>
      <br></br>
      <UserInput change={usernameChangedHandler} username={usersState.users[0].username} />
      <UserOutput username={usersState.users[0].username} password={usersState.users[0].password}/>
      <UserOutput username={usersState.users[1].username} password={usersState.users[1].password}/>
    </div>
  )
}

export default App
