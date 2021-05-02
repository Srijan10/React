import React from 'react'

const Heading ={ 
    fontSize : '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 style={Heading}>Inline Stylesheet</h1>
        </div>
    )
}

export default Inline
