import React, { useRef, useEffect, useContext } from 'react'
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = props => {
  const toggleBtn = useRef(null)
  let btnClass = ''
  if (props.showPersons) {
    btnClass = classes.red;
  }

  const authContext = useContext(AuthContext)

  useEffect(() => {
    toggleBtn.current.click()
  }, [])

  return(
    <div className={classes.Cockpit}>
      <h1>{props.message}</h1>
      <button ref={toggleBtn} className={btnClass} onClick={props.click}>Toggle Persons</button>
      <button onClick={authContext.login}>Login</button>
    </div>
  )
}

export default Cockpit