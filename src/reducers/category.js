const constants = require('../constants');

const initialState = {}

function update(state = initialState, action) {
	console.log("action.type是："+action.type);
	switch (action.type) {
		case constants.RECEIVE_CATEGORY:
			return Object.assign({}, state, action.json.category)
		default:
			return state
  }
}

module.exports = update;
