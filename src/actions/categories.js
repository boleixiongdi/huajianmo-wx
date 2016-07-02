import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchPackages(url) {
  return dispatch => {
    return fetch(url + '/api/category/list')
      .then(req => req.json())
      .then(json => dispatch(receivePackages(json)))
  }
}

function receivePackages(json) {
  return {
    type: constants.RECEIVE_CATEGORIES,
    json: json,
    receivedAt: Date.now()
  }
}

module.exports = { fetchPackages, receivePackages }
