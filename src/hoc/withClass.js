import React from 'react'
import PropTypes from 'prop-types'

const withClass = props => (
  <div className={props.classNm}>
    {props.children}
  </div>
)

withClass.propTypes = {
  classNm: PropTypes.string
}

export default withClass