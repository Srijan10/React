import React from 'react'

function Person({person, key}) {
    return (
        <div>
            <h2>
                {person.name}i am {person.age} years old. and i  know {person.skill} {key}
            </h2>
        </div>
    )
}

export default Person
