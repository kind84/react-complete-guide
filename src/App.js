import React, { useState } from 'react'
import './App.css'
import Persons from './Persons/Persons'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import Word from './Word/Word'
import Char from './Char/Char'

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

  const [ wordState, setWordState ] = useState({
    word: ''
  })
  
  const togglePersonsHandler = () => {
    let sp = !personsState.showPersons
    setPersonsState({
      ...personsState,
      showPersons: sp
    })
  }

  const deletePersonHandler = index => {
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

  const usernameChangedHandler = event => {
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

  const setWordHandler = event => {
    setWordState({
      word: event.target.value
    })
  }

  const charClickHandler = index => {
    const wa = wordState.word.split('')
    wa.splice(index, 1)
    const word = wa.join('')
    setWordState({
      word: word
    })
  }

  let persons = null
  if (personsState.showPersons) {
    persons = (
      <Persons
        click={deletePersonHandler}
        persons={personsState.persons}
        change={nameChangedHandler}
      />    
    )
  }

  let users = usersState.users.map(user => {
    return (
      <UserOutput 
        username={user.username} 
        password={user.password}
        key={user.id}
      />
    )
  })
  
  let chars = null
  if (wordState.word) {
    const wa = wordState.word.split('')
    chars = wa.map((c, index) => {
      return (
        <Char 
          char={c} 
          key={index}
          click={charClickHandler.bind(this, index)}
        />
      )
    })
  }
  
  return (
    <div className="App">
      <p>{messageState.message}</p>
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
      <br></br>
      <br></br>
      <UserInput change={usernameChangedHandler} username={usersState.users[0].username} />
      {users}
      <br></br>
      <br></br>
      <input onChange={setWordHandler} value={wordState.word} />
      <p>Word length: {wordState.word.length}</p>
      <Word wordLen={wordState.word.length} />
      {chars}
    </div>
  )
}

export default App
