import React, { useState, useContext } from "react"
import { Form } from "semantic-ui-react"
import { FriendContext } from "./FriendsProvider"

export const FriendAdd = () => {
    const { friends, getFriends, addFriend } = useContext(FriendContext)
    const [enteredFriend, setEnteredFriend] = useState('')
    const myUserId = +localStorage.getItem("activeUser")

// We are gonna use get friends
// BY ID, so we can get an array of that users friends.
// that way there is not querying for what's been rendered.
// We're only dealing with the database's info.

    const checkIfFriend = (enteredFriend) => {
        // IF YOU ARE NOT ON MY FRIENDS LIST
        // PASS YOUR ID INTO THE CONSTRUCT FRIEND OBJ
        friends.find(friend => {
           if (friend !== enteredFriend) {
               console.log("YOUR NOT ON MY FRIENDS LIST")
           }
        })
    }

    const constructFriendObj = (userId) => {
        if (enteredFriend !== "") {
            addFriend({
                myUserId,
                userId
            })
        }
    }

    return (
        <Form>
            <Form.Field>
                <label>Add friend</label>
                <input
                    placeholder="Witch's username"
                    value={enteredFriend}
                    //Two-way binding event to handle saving input
                    onChange={e => setEnteredFriend(e.target.value)}/>
                <Form.Button className="new__btn-post" 
                    onClick={
                        () => {
                            checkIfFriend(enteredFriend)
                        }}>Add</Form.Button>
            </Form.Field>
        </Form>
    )
}