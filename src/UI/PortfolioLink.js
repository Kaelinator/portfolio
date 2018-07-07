import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className="portfolio-link">
      <Link to={props.to}>
        <i className={`fa fa-${props.icon}`} aria-hidden={true}></i>
      </Link>
    </div>
  )
}
