import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    handleClick() {
        const {dispatch} = this.props
        dispatch(push('/about'))
    }
	render() {
		return (
			<div className="App">
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.handleClick.bind(this)}>点击</button>
            </div>
		);
	}
}



export default connect()(App);