import React from 'react'

const Container = ({ children, name }) => {
    return (
        <div>
            <div>{children}</div>
            <p>{name}</p>
        </div>
    )
}

export default Container