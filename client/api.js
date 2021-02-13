import request from 'superagent'

const apiURL = '/api/v1/penguins/'
const sites = '/api/v1/sites/'

export function getTypeBySite () {
  return request
    .get(apiURL)
    .then(response => response.body)
}

export function getAllSites () {
  return request
    .get(sites)
    .then(response => response.body)
}

export function getSite (siteID) {
  const siteURL = `${sites}${siteID}`
  return request
    .get(siteURL)
    .then(response => response.body)
}

export function getSiteByType (siteID, type) {
  const siteURL = `${sites}${siteID}/${type}`
  return request
    .get(siteURL)
    .then(response => response.body)
}

export function getSitesByType (type) {
  const siteURL = `${apiURL}${type}`
  return request
    .get(siteURL)
    .then(response => response.body)
}
