import React, { useState, useEffect } from 'react'
import { getAllSites } from '../api'
import { Link } from 'react-router-dom'

function Sites () {
  const [site, setSites] = useState([])

  const [letter, setLetter] = useState('')

  function showSites () {
    getAllSites()
      .then(site => {
        console.log(site)
        return setSites(site)
      })
      .catch(err => console.error(err.message))
  }

  useEffect(showSites, [])

  function getLetter (evt) {
    const firstLetter = evt.target.innerHTML
    setLetter(firstLetter)
  }

  const alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i))

  return (
    <>
      <h2>Sites</h2>
      {alphabet.map(result => (
        <span id={`${result}`} onClick={getLetter} className={letter === `${result}` ? 'active_image' : 'inactive_image'} key={result}>{result}</span>
      ))}
      <div id="nav" className="CharacterContainer"></div>
      <div>
        <ul>
          {site.filter(result => result.site_name.startsWith(`${letter}`)).map(filteredList => (
            <Link to={`/sites/${filteredList.site_id}`} key={filteredList.site_id}><li>{filteredList.site_name}</li></Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sites
