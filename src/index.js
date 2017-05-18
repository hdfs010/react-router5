import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
// import { Route } from 'react-router-dom'

import reducers from './reducers' // Or wherever you keep your reducers

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
	applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/about'))

import loadAbout from 'bundle-loader?lazy!./about.js'
import Test from './test'


const Abouts = () => (
	<Bundle load={loadAbout}>
    {(Abouts) => <Abouts/>}
  </Bundle>
)
console.log(Abouts)


class App extends React.Component {

	render() {
		return (
			<div>
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

