import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import createSagaMiddleware from 'redux-saga'

import createHistory from 'history/createBrowserHistory'

import reducers from './reducers' // Or wherever you keep your reducers
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

// import routes from './router'
import Bundle from './bundle'


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
 
const store = createStore(
	combineReducers({
	 ...reducers,
	 router: routerReducer
	}),
	applyMiddleware(middleware, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/about'))

import loadAbout from 'bundle-loader?lazy!./about'
import Test from './test'
import Counter from './counter'


const Abouts = () => (
	<Bundle load={loadAbout}>
	    {(Abouts) => <Abouts/>}
	</Bundle>
)
console.log(store.getState())


class App extends React.Component {

	render() {
		return (
			<div>
		        <Counter
			        value={0}
					onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
					onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
					onIncrementAsync={() => store.dispatch({type:'INCREMENT_ASYNC'})}/> 
				<Route exact path="/" component={Test} />
				<Route path="/about" component={Abouts} />
			</div>
		)
	}
}



ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
		   <App/>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)

