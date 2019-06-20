import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id: 1, name: "Paolo", age: 34 },
      { id: 2, name: "Mary", age: 26 }
    ],
    showPersons: false
  })
  
  const [ messageState, setMessageState ] = useState({
    message: "Hello"
  })

  const [ usersState, setUsersState ] = useState({
    users: [
      { id: 1, username: "kind84", password: "Hello!" },
      { id: 2, username: "mary92", password: "Zeus?" }
    ]
  })
  
  const togglePersonsHandler = () => {
    let sp = !personsState.showPersons
    setPersonsState({
      ...personsState,
      showPersons: sp
    })
  }

  const deletePersonHandler = (index) => {
    const persons = [ ...personsState.persons ]
    persons.splice(index, 1)
    setPersonsState({
      ...personsState,
      persons: persons
    })
  }

  const nameChangedHandler = (event, id) => {
    const pi = personsState.persons.findIndex(p => p.id === id)
    const person = { ...personsState.persons[pi] }
    const persons = [ ...personsState.persons ]
    person.name = event.target.value
    persons[pi] = person
    setPersonsState({
      ...personsState,
      persons: persons
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

  let persons = null
  if (personsState.showPersons) {
    persons = (
      <div>
        { 
          personsState.persons.map((person, index) => {
            return (
              <Person 
                click={deletePersonHandler.bind(this, index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                change={(event) => nameChangedHandler(event, person.id)}
              />    
            )
          })
        }
      </div>
    )
  }

  let users = (
    <div>
      {
        usersState.users.map(user => {
          return (
            <UserOutput 
              username={user.username} 
              password={user.password}
              key={user.id}
            />
          )
        })
      }
    </div>
  )
  
  return (
    <div className="App">
      <p>{messageState.message}</p>
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
      <br></br>
      <br></br>
      <UserInput change={usernameChangedHandler} username={usersState.users[0].username} />
      {users}
    </div>
  )
}

export default App
