import React from 'react'

const UserInput = props => {
  const style = {
    fontSize: '1.2rem',
    color: 'blue'
  }

  return (
    <div>
      <input style={style} onChange={props.change} value={props.username} />
    </div>
  )
}

export default UserInput