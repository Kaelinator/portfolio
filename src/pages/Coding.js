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
            title: 'Rockwell server network',
            alt: 'Judy hopps',
            description: 'This was a complete Minecraft server network that I created in the summer of 2016. Including two minigames, leaderboards, and ranks.',
            previewImg: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F39900000%2Fjudy-hopps-judy-hopps-39913646-750-750.jpg&f=1',
            carousel: [
              {
                description: 'It was really cool!',
                image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F39600000%2FJudy-Hopps-disneys-zootopia-39651126-960-960.jpg&f=1'
              },
              {
                description: 'It was really neat!',
                image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Forig14.deviantart.net%2Fd7a5%2Ff%2F2016%2F123%2F0%2F9%2Fjudy_and_nick_by_kuvshinov_ilya-da15pnt.jpg&f=1'
              }
            ]
          }
        ]}
      />
    )
  }
}
