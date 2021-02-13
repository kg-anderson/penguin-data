import React, { useState, useEffect } from 'react'
import { getSite } from '../api'
import { useParams, Link } from 'react-router-dom'

function SiteDetail () {
  const [types, setTypes] = useState([])
  const [selectedType, setSelectedType] = useState('')
  const [latitude, setLat] = useState('')
  const [longitude, setLong] = useState('')

  const { siteID, type } = useParams()
  useEffect(showDetails, [])

  function showDetails () {
    getSite(siteID)
      .then(results => {
        setLat(results[0].latitude_epsg_4326)
        setLong(results[0].longitude_epsg_4326)
        // get unique names of species and set the state
        const names = results.map(name => name.common_name).reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
        return setTypes(names)
      })
      .catch(err => console.error(err.message))
  }

  function onClick (evt) {
    const target = evt.target.id
    setSelectedType(target)
  }

  console.log(selectedType)

  return (
    <>
      <div className="links"><Link to={'/sites'}>Back to site list</Link></div>

      <div className="links"><Link to={'/type'}>Back to penguin selector</Link></div>
      <div className="site-details">
        <div className ="site-details-content">
          <h2>Site Details for {siteID}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet accusantium, ad libero veritatis quod neque! Est commodi ut ratione unde odio, laudantium at fugiat a cupiditate obcaecati consequatur harum quis.</p>
          <iframe
            src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=6&output=embed`}
            width="600"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />

        </div>

        <div className ="icons">
          <h3>The following types of penguins nest here:</h3>
          <div className="breedContainer">
            {types.map(result => (
              <div key={result} className={result === type ? 'active_type breedType' : 'inactive_image breedType'}>
                <Link to={`/sites/${siteID}/${result}`}>
                  <div className="breed" onClick={onClick}>{result}
                    <img src={`images/${result}_icon.png`} id={result} alt="" className="icon"/>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SiteDetail
