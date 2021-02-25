import React from 'react';

export default function UserCard({ details }){
    ////////// IF STATEMENT FOR RENDERING USER DATA //////////
    ////////// IF STATEMENT FOR RENDERING USER DATA //////////
    ////////// IF STATEMENT FOR RENDERING USER DATA //////////
    console.log(details)
    if(!details){
        return <h3>Working to fetch user details...</h3> // if no details are passed through prop, it will render this in place of user data cards
    }

    return (
        <div className='user container' >
            <h2>Name: {details.username}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}