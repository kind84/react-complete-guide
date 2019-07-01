import React, { useContext } from 'react'
import WithClass from '../../../hoc/withClass'
import './Person.css'
import AuthContext from '../../../context/auth-context'

const Person = props => {
  const authContext = useContext(AuthContext)
  
  let logged = authContext.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>
  
  return (
    <WithClass classNm="Person">
      {logged}
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <input onChange={props.change} value={props.name} />
    </WithClass>
  )
}

export default Person