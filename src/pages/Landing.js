import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h2>Landed</h2>
        <Link to="/running">I run</Link>
      </div>
    )
  }
}
