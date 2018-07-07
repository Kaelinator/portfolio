import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My portfolio</h1>
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
