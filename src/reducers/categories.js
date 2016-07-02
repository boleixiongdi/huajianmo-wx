const constants = require('../constants');

const initialState = []

function update(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_CATEGORIES:

			const categories = []
			/* parse the categories */
			console.log("这是服务器端返回的数据"+action.json);
			console.log(action.json);
			action.json.categories.map(function (p, i) {
				console.log(p);
				console.log(i);
				categories.push(
					{
						id: i,
						priority: p.priority,
						name: p.name,
						status: p.status
					}
				)
			})

			return Object.assign({}, state, { categories: categories } )

		default:
			return state
  }
}

module.exports = update;
