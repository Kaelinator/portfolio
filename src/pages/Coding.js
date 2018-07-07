import React, { Component } from 'react'

import PortfolioScaffold from '../UI/PortfolioScaffold'

export default class Coding extends Component {
  render() {
    return (
      <PortfolioScaffold 
        title="Coding"
        color="#5eaa4f"
        description="I spend the greater portion of my freetime coding. I love t
          o incorporate code wherever I can, whether into school, internships, a
          nd running."
        cards={[
          {title: 'hi'}
        ]}
      />
    )
  }
}
