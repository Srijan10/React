// Pure Component Example

import React, { PureComponent } from 'react'

class Apple extends PureComponent {
    
    render() {
        console.log('Pure Component Render')
        return (
            <div>
                Pure Apple {this.props.name}
            </div>
        )
    }
}

export default Apple
