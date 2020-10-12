import React from "react"
import image from '../../images/The_Coven_Code_Ball_200x200.png'

export const HeaderWelcome = () => {

    const username = localStorage.getItem("username")

    return (
    <>
        <img src={image} alt="logo"/>
        <p>Witchy Salutations, {username}!</p>
    </>  
    )
}
