import React from 'react'

import '../styles/Slide.css'

export default (props) => {
  return (
    <div className="slide">
      <div className="image-wrapper">
        <img src={props.image} alt={props.description}/>
      </div>
      <p>{props.description}</p>
    </div>
  )
}
