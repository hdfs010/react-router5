import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Login from './routers/login/'
import Router from './router'
import styles from './App.css'

import Header from './components/layout/header'

class App extends React.Component {
    render() {
        console.log(this.props)
        const { router } = this.props
        const { pathname } = router.location

        return (
            // Is it a separate layout
            pathname.includes('login') ? <Route path={pathname} component={Login} /> :
            <div className={styles.wrapper}>
            <Header></Header>
                <Router></Router>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps)(App)