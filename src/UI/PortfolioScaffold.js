import React, { Component } from 'react'

import PortfolioLink from './PortfolioLink'
import Card from './Card'
import '../styles/PortfolioScaffold.css'

export default class PortfolioScaffold extends Component {
  render() {
    return (
      <div className="portfolio-scaffold">
        <div className="header-wrapper" style={{ backgroundColor: this.props.color }}>
          <header>
            <PortfolioLink icon="code" to="/coding" />
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </header>
        </div>
        <main>
          {
            this.props.cards.map((contents, i) => (
              <Card contents={contents} key={i} />
            ))
          }
        </main>
      </div>
    )
  }
}
