import React from 'react'

const Person = ({ user, greet }) => {
    const hello = greet()

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.gender}</p>
            <p>{user.status}</p>
            <p>{user.character}</p>
            <button onClick={greet()} >Oya Greet</button>
        </div>
    )
}

export default Person