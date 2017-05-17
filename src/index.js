import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Route } from 'react-router-dom'

import reducers from './reducers' // Or wherever you keep your reducers

import App from './App'
import About from './about'
import Test from './test'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
console.log(history)

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
	combineReducers({
		...reducers,
		router: routerReducer
	}),
	applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/about'))

ReactDOM.render(
	<Provider store={store}>
    <div>
		<ConnectedRouter history={history}>
		  <div>
		    <Route exact path="/" component={App}/>
		    <Route path="/about" component={About}/>
		    <Route path="/test" component={Test}/>
		  </div>
		</ConnectedRouter>
    </div>
  </Provider>,
	document.getElementById('root')
)