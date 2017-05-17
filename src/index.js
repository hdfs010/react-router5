import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
// import { Route } from 'react-router-dom'

import reducers from './reducers' // Or wherever you keep your reducers

import routes from './router'
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

import AppCon from 'bundle-loader?lazy&name=app-[name]!!./App.js'
import AboutCon from 'bundle-loader?lazy&name=app-[name]!!./about.js'

const App = () => (
  <Bundle load={AppCon}>
    {(App) => <App/>}
  </Bundle>
)
const About = () => (
  <Bundle load={AboutCon}>
    {(About) => <About/>}
  </Bundle>
)

 

ReactDOM.render(
	<Provider store={store}>
    <div>
		<ConnectedRouter history={history}>
		   <div>
				<Route exact path="/" component={App} />
				<Route path="/about" component={About} />
		   </div>
		</ConnectedRouter>
    </div>
  </Provider>,
	document.getElementById('root')
)