import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

function About({ dispatch, ...others}) {
	console.log(others)
	
	const handleClick = () => {
		dispatch(push('/test'))
	}

	return (
		<div>
			<h1>good</h1>
			<button type="button" onClick={handleClick}>点击</button>
		</div>
	)
}

export default connect()(About)