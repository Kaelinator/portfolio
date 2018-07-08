import React, { Component } from 'react'

import PortfolioLink from './PortfolioLink'
import Card from './Card'
import '../styles/PortfolioScaffold.css'

export default class PortfolioScaffold extends Component {
  render() {
    return console.log(this.props) || (
      <div className="portfolio-scaffold">
        <div className="header-wrapper" style={{ backgroundColor: this.props.color }}>
          <header>
            <PortfolioLink icon={this.props.icon} />
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </header>
        </div>
        <main>
          <ul className="card-list">
            {
              this.props.cards.map((contents, i) => (
                <li key={`card-${i}`}>
                  <Card contents={contents} />
                </li>
              ))
            }
          </ul>
        </main>
      </div>
    )
  }
}
