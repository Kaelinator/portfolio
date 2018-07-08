import React from 'react'

export default (props) => {
  return (
    <div>
      <img src={props.image} alt={props.description} width={400}/>
      <p>{props.description}</p>
    </div>
  )
}
