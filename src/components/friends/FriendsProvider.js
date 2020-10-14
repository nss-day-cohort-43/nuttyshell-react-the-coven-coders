// Created by Sam Edwards
import React, { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendsProvider = props => {
    const [friends, setFriend] = useState([])
    const activeUser = +localStorage.getItem("activeUser")

    const getFriends = activeUser => {
        const parsedActiveUser = +activeUser
        return fetch (`http://localhost:8088/friends/?myUserId=${parsedActiveUser}&_expand=user`)
        .then(response => response.json())
        .then(setFriend)
    }

    const addFriend = friendObj => {
        fetch("http://localhost:8088/friends/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(setFriend)
    }

    return (
        <FriendContext.Provider value={{
            friends, getFriends, addFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}