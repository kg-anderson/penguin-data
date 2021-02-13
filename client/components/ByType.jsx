import React, { useState, useEffect } from 'react'
import { getSiteByType } from '../api'
import { useParams } from 'react-router-dom'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import SiteDetail from './SiteDetail'
import PenguinDetail from './PenguinDetail'

function ByType () {
  const { siteID, type } = useParams()

  const [data, setData] = useState({
    countData: [],
    seasonData: [],
    name: ''
  })

  const [state, setState] = useState(false)

  useEffect(showDetails, [])

  const season = []
  const count = []

  function showDetails () {
    getSiteByType(siteID, type)
      .then(data => {
        data.map(x => count.push(x.penguin_count))
        data.map(x => season.push(x.season_starting))
        return setData({
          countData: count,
          seasonData: season,
          name: type
        })
      })
      .catch(err => console.error(err.message))
  }

  return (
    <>
      <div>
        <SiteDetail/>
        {data.countData.length > 2 ? <LineGraph refresh={state} info={data}/> : <BarGraph info={data} />}
      </div>
      <PenguinDetail/>
    </>
  )
}

export default ByType
