import React, { useState, createContext } from "react"

export const FriendsContext = createContext()

export const FriendsProvider = props => {
    const [friends, setFriend] = useState([])

    const getFriends = activeUser => {
        const parsedActiveUser = +activeUser
        return fetch (`http://localhost:8088/friends/?myUserId=${parsedActiveUser}&_expand=user`)
        .then(response => response.json())
        .then(setFriend)
    }

    return (
        <FriendsContext.Provider value={{
            friends, getFriends
        }}>
            {props.children}
        </FriendsContext.Provider>
    )
}