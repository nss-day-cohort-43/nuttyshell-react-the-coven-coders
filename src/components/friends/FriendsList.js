import React, { useContext, useEffect }from "react"
import { FriendContext } from "./FriendsProvider"

export const FriendsList = () => {
    const { friends, getFriends } = useContext(FriendContext)

    useEffect(() => {
        getFriends()
    }, [])

    return(
        <>
            <h2>Friends List</h2>
        </>
    )
}