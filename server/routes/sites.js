const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllSites()
    .then(sites => {
      res.json(sites)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:siteID', (req, res) => {
  const site = req.params.siteID
  db.getSite(site)
    .then(result => {
      res.json(result)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:siteID/:type', (req, res) => {
  const site = req.params.siteID
  const type = req.params.type
  db.getSiteByType(site, type)
    .then(result => {
      res.json(result)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
