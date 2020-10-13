import React from "react"
import { useHistory } from "react-router-dom"

export const HeaderWelcome = () => {

    const username = localStorage.getItem("username")
    const history = useHistory()

    const clearStorage = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
    <>
        <p>Witchy Salutations, {username}!</p>
        <button onClick={clearStorage}>
            Log Out
        </button>
    </>  
    )
}
