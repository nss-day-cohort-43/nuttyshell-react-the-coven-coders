import React from "react"
import { useHistory } from "react-router-dom"
import image from '../../images/logo_cc.svg'

export const HeaderWelcome = () => {

    const username = localStorage.getItem("username")
    const history = useHistory()

    const clearStorage = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
    <>
        <img src={image} alt="Coven Coders logo"/>
        <p>Witchy Salutations, {username}!</p>
        <button onClick={clearStorage}>
            Log Out
        </button>
    </>  
    )
}
