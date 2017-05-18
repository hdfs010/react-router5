import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function demo(state={}, action) {
	switch(action.type) {
		case 'Add':
			return state + 1
		default:
			return state
	}
}

function counter(state = 0, action) {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const reducer = combineReducers({
	demo,
	counter,
	router: routerReducer
})

export default reducer