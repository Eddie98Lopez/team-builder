import React from 'react'

export default function TeamMember(props) {
    const {member} = props
    const {name, email, role} = member

    
    return (
        <div>

            <h2>{name}</h2>
            <p>{email}</p>
            <p>{role}</p>
            
        </div>
    )
}
