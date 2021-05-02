import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCouner extends Component {
   
    
    render() {

        const {count , incrementCount} = this.props
        return (
                <button onClick={incrementCount}>
                    {this.props.name } Clicked { count } times</button>
            
        )
    }
}

export default WithCounter(ClickCouner,5)
