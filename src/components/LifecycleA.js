import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Pradeep'
        }
        console.log('LifeCycleA Constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LigeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifeCycleA componentDidmount')
    }

    shouldComponentUpdate(){
        console.log('lifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'codeevaluation'
        })
    }



    render() {
        console.log('lifecycleA render')
        return (
            <div>
                <div>
                LifeCyle A</div>
                <button onClick={this.changeState}>ChangeState</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
