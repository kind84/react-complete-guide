import React from 'react'
import styles from './Word.module.css'

const Word = props => {
  let text = null
  let style = null
  if (props.wordLen > 0 && props.wordLen < 5) {
    text = "Word too short"
    style = styles.red
  } else if (props.wordLen >= 5) {
    text = "Word long enough"
    style = styles.green
  }
  
  return (
    <div>
      <p className={style}>{text}</p>
    </div>
  )
}

export default Word