import React from 'react'

const Hello = () => {
    // return(
    //     <div className='dummyClass>
    //         <h1>Hello Hello Pradeep</h1>
    //     </div>
    // )
    return React.createElement('div', {id:'hello', className:'dumyClass'},React.createElement('h1',null,"hello Heelo"))
}

export default Hello