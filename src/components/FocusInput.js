import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()//1st
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>{/* 2nd */}
                <button onClick={this.clickHandler}>Focus Input</button> {/* Final define the handler */}
            </div>
        )
    }
}

export default FocusInput
