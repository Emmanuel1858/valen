import React from 'react'

const MiddleComponent = ({ users }) => {


    return (
        <div>
            {
                users.map(user => {

                    return (
                        <div>
                            <span>{user.name}</span>
                            <span> Studied </span>
                            <span>{user.courseOfStudy}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MiddleComponent