import React, { Component } from 'react'
import { connect } from  'react-redux'
import { bindActionCreators } from  'redux'

class Counter extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        <button onClick={onDecrement}>
          -
        </button>
      </p>
    )
  }
}

export default Counter

