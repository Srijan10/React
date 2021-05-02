import React, { Component, PureComponent } from 'react'
import Apple from './Apple'
import MemoComp from './MemoComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pradeep'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.state({
                name: 'Pradeep'
            })
        },2000)
    }

    render() {
        console.log('******Parent Component Render **********')
        return (
            <div>

                Parent Component
                <MemoComp name={this.state.name}/>
                {/* <RegularComp name={this.state.name}/>
                <Apple name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
