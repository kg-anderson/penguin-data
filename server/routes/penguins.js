const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getTypeBySite()
    .then(penguins => {
      res.json(penguins)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:type', (req, res) => {
  const type = req.params.type
  console.log(type)
  db.getSitesByType(type)
    .then(result => {
      res.json(result)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
