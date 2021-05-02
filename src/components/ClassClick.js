import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log("Button is clicked")
    }
    render() {
        return (
            <div>
                <button onClick={() => this.clickHandler()}>CLick</button>
            </div>
        )
    }
}

export default ClassClick
