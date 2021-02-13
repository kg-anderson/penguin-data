import React from 'react'
import { Route, Link } from 'react-router-dom'
import Sites from './Sites'
import TypeSelector from './TypeSelector'
import SiteDetail from './SiteDetail'
import ByType from './ByType'

import PenguinSelector from './PenguinSelector'
import PenguinDetail from './PenguinDetail'

function App () {
  return (
    <>
      <Link to={'/'}><h1>Penguin Data</h1></Link>
      <Route exact path='/' component={TypeSelector} />
      <Route exact path='/type' component={PenguinSelector} />
      <Route exact path='/sites' component={Sites} />
      <Route exact path='/type/:type' component={PenguinDetail} />
      <Route exact path='/sites/:siteID' component={SiteDetail} />
      <Route exact path='/sites/:siteID/:type' component={ByType} />
    </>
  )
}

export default App
