const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTypeBySite,
  getAllSites,
  getSite,
  getSiteByType,
  getSitesByType
}

// getType by site
function getTypeBySite (db = connection) {
  const site = 'ACUN'
  const type = 'adélie penguin'

  return db('penguins')
    .select()
    .where(function () {
      this
        .where('common_name', `${type}`)
        .andWhere('site_id', `${site}`)
    })
}

// get all sites

function getAllSites (db = connection) {
  return db('penguins')
    .select('site_name', 'site_id')
    .distinct()
}

// get 1 site
function getSite (site, db = connection) {
  return db('penguins')
    .select()
    .where('site_id', site)
}

function getSiteByType (site, type, db = connection) {
  return db('penguins')
    .where(function () {
      this
        .where('site_id', site)
        .andWhere('common_name', type)
    })
}

// get sites by type
function getSitesByType (type, db = connection) {
  return db('penguins')
    .distinct('site_name', 'site_id')
    .where('common_name', type)
}

// get site by first letter
// function getSitesbyLetter (letter, db = connection) {
//   return db('penguins')
//     .where('site_name', 'like', `${letter}%`)
//     .distinct('site_name', 'site_id')
// }
