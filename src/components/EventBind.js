import React, { Component } from 'react'
// binding is done coz *this is undefined in the context. 
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
        // Binding in constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message : 'Goodbye'
    //     })
    //     console.log(this)
    // }

    //class properties as an Aero Function
    clickHandler = () => {
        this.setState({
            message : 'goodbye'
        })

        
    }
    
    render() {
        return (
            <div>{this.state.message}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Arrow function */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* binding in class constructor */}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind
