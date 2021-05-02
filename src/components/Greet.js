import React from 'react'

// function Greet(){
//     return <h1>Hello Pradeep</h1>
// }

const Greet = props => {
    const {name, heroname} = props
    return (
    <div><h1>Hello {name} a.k.a {heroname} </h1>
    
    </div>
    )
}
export default Greet