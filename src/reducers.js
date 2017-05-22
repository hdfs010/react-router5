export function demo(state={}, action) {
	switch(action.type) {
		case 'Add':
			return state + 1
		default:
			return state
	}
}

export function counter(state = 0, action) {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const reducer = {
	demo,
	counter
	
}

export default reducer