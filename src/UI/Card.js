import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import Slider from 'react-slick'

import '../styles/Card.css'
import Slide from './Slide'

export default class Card extends Component {

  constructor() {
    super()

    this.state = {
      expanded: false
    }

    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand() {
    console.log('expaned:', this.state.expanded)
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {

    const carouselSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'carousel'
    }

    return (
      <div className={`card ${(this.state.expanded) ? 'card-expanded' : 'card-collapsed'}`}>
        <div className="description">
          <p>{this.props.contents.description}</p>
        </div>
        <div className="preview">
          {
            (!this.state.expanded)
              ? <img src={this.props.contents.previewImg} alt={this.props.contents.alt}/>
              : <Parallax 
                  bgImage={this.props.contents.previewImg}
                  strength={500}></Parallax>
          }
        </div>
        <h1 className="title">{this.props.contents.title}</h1>
        <div className="drop-down">
          <i 
            className={`fa fa-chevron-${(this.state.expanded) ? 'up' : 'down'}`}
            aria-hidden={true} 
            onClick={this.toggleExpand}></i>
        </div>
        <div className="details">
          <p>Details</p>
        </div>
        <div className="carousel-wrapper">
          <Slider {...carouselSettings}>
            {
              this.props.contents.carousel.map((props, i) => (
                  <Slide {...props} key={`carousel-content-${i}`}/>
              ))
            }
          </Slider>
        </div>
      </div>
    )
  }
}
