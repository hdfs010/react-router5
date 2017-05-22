import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from 'antd'
import SideBar from './components/sideBar'
import Header from './components/header'

function About({ dispatch, ...others}) {
	console.log(others)
	
	const handleClick = () => {
		dispatch(push('/test'))
	}

	return (
		<div>
		<Button type="primary">按钮</Button>
			<h1>good</h1>
			<SideBar></SideBar>
			<Header></Header>
			<button type="button" onClick={handleClick}>点击</button>
		</div>
	)
}

export default connect()(About)