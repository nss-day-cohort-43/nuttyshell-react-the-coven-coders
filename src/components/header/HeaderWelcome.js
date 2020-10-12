import React from "react"
import { useHistory } from "react-router-dom"
import image from '../../images/The_Coven_Code_Ball_200x200.png'

export const HeaderWelcome = () => {

    const username = localStorage.getItem("username")
    const history = useHistory()

    const clearStorage = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
    <>
        <img src={image} alt="logo"/>
        <p>Witchy Salutations, {username}!</p>
        <button onClick={clearStorage}>
            Log Out
        </button>
    </>  
    )
}
