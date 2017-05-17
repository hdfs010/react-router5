import React from 'react'
import { renderRoutes } from 'react-router-config'

import App from './App'
import About from './about'
import Test from './test'

 

const routes =[{
		path: '/',
		exact: true,
		component: About
	}, {
		path: '/about',
		component: About
	}, {
		path: '/test',
		component: Test
	}]

export default routes