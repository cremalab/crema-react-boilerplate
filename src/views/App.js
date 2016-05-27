import React, { Component } from 'react'
import { connect } from 'react-redux'

export class App extends Component {
  render(){
    const { props } = this
    return (
      <div>
        <h1>Apps yo</h1>
        {props.children}
      </div>
    )
  }
}

export default connect(
  state => ({
    state: state
  })
)(App)
