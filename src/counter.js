import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Counter extends Component {
    

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

   

    handleChange() {
        console.log(this)
    }

    render() {
        const { value, onIncrement, onDecrement, onIncrementAsync } = this.props
        console.log(this)
        return (
            <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
         
        {' '}
        <button onClick={onIncrementAsync}>
          Increment async
        </button>
      </p>
        )
    }
}
 

function mapStateToProps(state) {
    console.log(state)
    return {
        value: state.counter
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     }
// }

export default connect(
    mapStateToProps
)(Counter)

// export default Counter
