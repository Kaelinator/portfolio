import React, { Component } from 'react'
import SocialMediaBar from 'react-social-media-bar'
import { get } from 'axios'

import '../styles/Landing.css'

import PortFolioLink from '../UI/PortfolioLink'

export default class Landing extends Component {

  constructor() {
    super()

    this.state = {
      media: [
        {
          text: 'Loading',
          link: '#',
          media: 'spinner'
        }
      ]
    }
  }

  componentDidMount() {

    get(process.env.REACT_APP_SOCIAL_LINKS_ENPOINT)
      .then(res => res.data)
      .then(media => this.setState({ media }))
      .catch(console.log)
  }

  render() {
    return (
      <div id="wrapper">
        <div id="name-wrapper"><h1>Kael Kirk</h1></div>
        <div id="media-wrapper">
          <SocialMediaBar icons={this.state.media}/>
        </div>
        <div id="portfolio-wrapper">
          <PortFolioLink icon="trophy" to="/running" subtitle="Running" />
          <PortFolioLink icon="code" to="/coding" subtitle="Coding" />
          <PortFolioLink icon="video-camera" to="/creating" subtitle="Creating" />
        </div>
      </div>
    )
  }
}
