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
          {
            title: 'hi',
            alt: 'Judy hopps',
            previewImg: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F39900000%2Fjudy-hopps-judy-hopps-39913646-750-750.jpg&f=1'
          },
          {title: 'hello'},
          {title: 'judy'}
        ]}
      />
    )
  }
}
