import fetch from 'isomorphic-fetch'
const constants = require('../constants')

//获取数据
function fetchPackage(url, id) {
  return dispatch => {
    return fetch(url + '/api/category/id')
      .then(req => req.json())
      .then(json => dispatch(receivePackage(json)))
  }
}

function receivePackage(json) {
  return {
    type: constants.RECEIVE_CATEGORY,
    json: json,
    receivedAt: Date.now()
  }
}

module.exports = { fetchPackage, receivePackage }
