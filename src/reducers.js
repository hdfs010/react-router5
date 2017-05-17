import { combineReducers } from 'redux'

function demo(state={}, action) {
	switch(action.type) {
		case 'Add':
			return state + 1
		default:
			return state
	}
}

const reducer = combineReducers({
	demo
})

export default reducer