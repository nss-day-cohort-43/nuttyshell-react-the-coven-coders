import React, { useContext, useEffect }from "react"
import { FriendContext } from "./FriendsProvider"
import { FriendCard } from "./FriendCard"

export const FriendsList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    const activeUser = +localStorage.getItem("activeUser")

    useEffect(() => {
        getFriends(activeUser)
    }, [])

    return (
        <section className="container">
            <h2>Friends List</h2>
            {
                friends.map(friend => {
                    // had to drill super deep for props to get username
                    return <FriendCard key={friend.id} props={friend.user.username}/>
                })
            }
        </section>
    )
}