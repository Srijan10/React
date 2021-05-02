import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
    super(props)

    this.state = {
         count: 0
    }
}

increament(){
    //Code has to be executed after the state has been updated ? Place that code in the call back function which is
    // the second argument to the setState method
    // this.setState({
    //     count: this.state.count + 1
    // },() => {
    //     console.log('callback value', this.state.count)
    // })
    // When you have to update state based on the previous state value, pass in a function as an argument
    // instead of the regular object.
    this.setState(prevState => ({
        count: prevState.count + 1
    }))
}
increamentfive(){
    this.increament()
    this.increament()
    this.increament()
    this.increament()
    this.increament()
}

    render() {
        return (<div>
            <div>
                count - {this.state.count}
            </div>
            <button onClick={() => this.increamentfive()}>increament</button>
        </div>
            
        )
    }
}

export default Counter
