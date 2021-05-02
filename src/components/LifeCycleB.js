import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Pradeep'
        }
        console.log('LifeCycleB Constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LigeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifeCycleB componentDidmount')
    }

    shouldComponentUpdate(){
        console.log('lifeCycleB shouldComponentUpdate')
        return true
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }


    render() {
        console.log('lifecycleB render')
        return (
            <div>
                LifeCyle B
            </div>
        )
    }
}

export default LifecycleB
