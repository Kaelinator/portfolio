import React, { Component } from 'react'
import SocialMediaBar from 'react-social-media-bar'

import '../styles/Landing.css'
import media from '../meta/media-icons'

import PortFolioLink from '../UI/PortfolioLink'

export default class Landing extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="name-wrapper"><h1>Kael Kirk</h1></div>
        <div id="media-wrapper">
          <SocialMediaBar icons={media}/>
        </div>
        <div id="portfolio-wrapper">
          <PortFolioLink icon="trophy" to="/running"/>
          <PortFolioLink icon="code" to="/coding"/>
          <PortFolioLink icon="video-camera" to="/creating"/>
        </div>
      </div>
    )
  }
}
