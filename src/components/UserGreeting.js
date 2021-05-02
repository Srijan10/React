import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        // short circuit operator
        // return this.state.isLoggedIn && <div>welcome Pradeep</div>  

        //ternary conditional operator conditional rendering
        return this.state.isLoggedIn ?
        (<div>Welcome Pradeep</div>):
        (<div>welcome guest</div>)


        // Element Variable conditional rendering
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>welcome Pradeep</div>
        // }else{
        //     message = <div>welcome guest</div>
        // }
        // return <div>{message}</div>

        //if/else conditional rendering        
    //     if(this.state.isLoggedIn){
    //         return <div>Welcome Pradeep</div>
    //     }else{
    //         return <div>welcome bro</div>
    // }
        // return (
        //     <div>
        //         <div>Welcome Loggedin User</div>
        //         <div>Welcome  NotLoggedin User</div>
        //     </div>
        // )
    }
}

export default UserGreeting
