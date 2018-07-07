import React, { Component } from 'react'
import SocialMediaBar from 'react-social-media-bar'

import '../styles/Landing.css'
import media from '../meta/media-icons'

export default class Landing extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="name-wrapper"><h1>Kael Kirk</h1></div>
        <div id="media-wrapper">
          <SocialMediaBar icons={media}/>
        </div>
        <div id="portfolio-wrapper">
          <SocialMediaBar icons={media}/>
        </div>
      </div>
    )
  }
}
