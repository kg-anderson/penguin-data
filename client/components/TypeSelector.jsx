import React from 'react'
import { Link } from 'react-router-dom'

function TypeSelector () {
  return (
    <div className="container">
      <Link to={'/type'}><div className="type"><h4>By penguin Type</h4></div></Link>
      <Link to={'/sites'}><div className="type"><h4>By site</h4></div></Link>
    </div>
  )
}

export default TypeSelector
