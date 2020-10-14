// Created by Sam Edwards
import React, { useContext, useEffect }from "react"
import { FriendContext } from "./FriendsProvider"
import { FriendCard } from "./FriendCard"
import { FriendAdd } from "./FriendAdd"
import "./friends.css"

export const FriendsList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    const activeUser = +localStorage.getItem("activeUser")

    useEffect(() => {
        getFriends(activeUser)
    }, [])

    return (
        <section className="container">
            <h2>Friends List</h2>
            <FriendAdd />
            {
                friends.map(friend => {
                    // had to drill super deep for props to get username
                    return <FriendCard key={friend.id} props={friend.user.username}/>
                })
            }
        </section>
    )
}