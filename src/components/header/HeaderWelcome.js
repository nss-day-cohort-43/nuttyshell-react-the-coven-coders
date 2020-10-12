import React from "react"

export const HeaderWelcome = () => {

    const username = localStorage.getItem("username")
    
    return (
        <p>Witchy Salutations, {username}!</p>    
    )
}
