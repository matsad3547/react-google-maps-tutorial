import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  margin: '1em .5em',
}

const Button = ({ onClick, label }) => (

  <input
    type="button"
    onClick={onClick}
    value={label}
    style={styles}
    ></input>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
