import React, { Component } from 'react'

import PortfolioLink from './PortfolioLink'
import Card from './Card'
import '../styles/PortfolioScaffold.css'
import { get } from 'axios'

export default class PortfolioScaffold extends Component {

  constructor(props) {
    super(props)

    this.state = {
      icon: 'spinner',
      title: 'Loading',
      description: '...',
      color: '#999',
      cards: []
    }
  }

  componentDidMount() {
    
    const options = {
      params: { pillar: this.props.pillar }
    }

    get(process.env.REACT_APP_META_ENDPOINT, options)
      .then(res => res.data)
      .then(meta => this.setState({ ...meta }))
      .catch(console.log)
    
    get(process.env.REACT_APP_CARDS_ENDPOINT, options)
      .then(res => res.data)
      .then(cards => this.setState({ cards }))
      .catch(console.log)
  }

  render() {
    return (
      <div className="portfolio-scaffold">
        <div className="header-wrapper" style={{ backgroundColor: this.state.color }}>
          <header>
            <PortfolioLink icon={this.state.icon} />
            <h1>{this.state.title}</h1>
            <p>{this.state.description}</p>
          </header>
        </div>
        <main>
          <ul className="card-list">
            {
              this.state.cards.map((contents, i) => (
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
