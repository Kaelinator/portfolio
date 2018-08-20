import React from 'react'
import { Link } from 'react-router'

export default props => {
  return (
    <div className="portfolio-link">
      <Link to={props.to}>
        <i className={`fa fa-${props.icon} ${props.loading && 'loading'}`} aria-hidden={true}></i>
        { props.subtitle && <h1 className="subtitle">{props.subtitle}</h1> }
      </Link>
    </div>
  )
}
