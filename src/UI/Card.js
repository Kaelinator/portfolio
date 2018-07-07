import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.contents.title}</h1>
      </div>
    )
  }
}
