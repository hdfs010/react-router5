import React from 'react'
import loadAbout from 'bundle-loader?lazy!./about'
import Bundle from './bundle'
import { Route } from 'react-router-dom'




const Abouts = () => (
	<Bundle load={loadAbout}>
	    {(Abouts) => <Abouts/>}
	</Bundle>
)


class Router extends React.Component {

	render() {
		return (
			<span>
		        
				<Route exact path="/" component={Abouts} />
				<Route path="/about" component={Abouts} />
				
			</span>
		)
	}
}

export default Router