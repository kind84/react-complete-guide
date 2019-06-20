import React from 'react'

const Word = props => {
  let text = null
  if (props.wordLen > 0 && props.wordLen < 5) {
    text = "Word too short"
  } else if (props.wordLen >= 5) {
    text = "Word long enough"
  }
  
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default Word