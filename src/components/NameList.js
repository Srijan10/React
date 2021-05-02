import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'clark','diana','Bruce']
    const persons = [
        {id : 1,
        name: 'Bruce',
        age: 30,
        skill: 'react'
    },
    {id : 2,
        name: 'Clark',
        age: 34,
        skill: 'Python'
    },
    {id : 3,
        name: 'Diana',
        age: 23,
        skill: 'JavaScript'
    }
    ]
    // const nameList = names.map(name => <h2>{name}</h2>)
    const nameList = names.map((name, index) => (<h2 key={index}>{index} {name}</h2>))
    // const personList = persons.map(person => <Person key={person.id} person={person} /> )
    return (
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        // </div>
        //or
        // <div>
        //     {
        //         names.map(name => <h2>{name}</h2>)
        //     }
        // </div>
        <div>
            {nameList}
        </div>
    )
}

export default NameList
