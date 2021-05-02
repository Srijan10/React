import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    incrementCout = () =>{
        this.setState({
            count: this.state.count +1
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCout}>count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
