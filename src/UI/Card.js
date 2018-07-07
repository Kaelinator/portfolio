import React, { Component } from 'react'

import '../styles/Card.css'

export default class Card extends Component {
  render() {
    return (
      <div className="card card-collapsed">
        <div className="preview">
          <img src={this.props.contents.previewImg} alt={this.props.contents.alt}/>
        </div>
        <h1 className="title">{this.props.contents.title}</h1>
        <div className="drop-down">
          <i className="fa fa-chevron-down" aria-hidden={true}></i>
        </div>
      </div>
    )
  }
}
