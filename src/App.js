import React, { Component } from 'react'
import './styles/App.css'
import './styles/Animations.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

export default App
