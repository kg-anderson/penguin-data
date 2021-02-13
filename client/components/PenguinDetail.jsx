import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSitesByType } from '../api'

function PenguinDetail () {
  const { type, siteID } = useParams()

  const [sites, setSites] = useState([])
  const [currentSelection, setCurrentSelection] = useState('')

  useEffect(getSites, [])

  function getSites () {
    getSitesByType(type)
      .then(sites => {
        return setSites(sites)
      })
      .catch(err => console.error(err.message))
  }

  function handleClick (e) {
    e.preventDefault()
    setCurrentSelection(e.target.innerHTML)
    console.log('The link was clicked.')
  }

  const capitalised = type.charAt(0).toUpperCase() + type.slice(1)

  return (
    <>
      <p>{capitalised} penguins nest at the following locations:</p>
      {sites.map(result => (
        <div onClick={handleClick} key={result.site_id} className={result.site_id === siteID ? 'active_site' : 'inactive_image'}>
          <div>
            <Link to={`/sites/${result.site_id}/${type}`}>{result.site_name}</Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default PenguinDetail
