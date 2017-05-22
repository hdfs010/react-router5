import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Login from './routers/login/'
import Router from './router'
import styles from './App.less'

import Header from './components/layout/header'
import Sidebar from './components/layout/sidebar'

class App extends React.Component {
    render() {
        console.log(this.props)
        const { router } = this.props
        const { pathname } = router.location

        return (
            // Is it a separate layout
            pathname.includes('login') ? <Route path={pathname} component={Login} /> :
            <div className={styles.wrapper}>
                <Sidebar></Sidebar>
                <div className={styles.rightMain}>
                    <Header></Header>
                    <div className={styles.content}>
                        <Router></Router>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps)(App)