// Created by Sam Edwards
import React, { useState, useContext } from "react"
import { Form } from "semantic-ui-react"
import { FriendContext } from "./FriendsProvider"

export const FriendAdd = () => {
    const { friends, getFriends, addFriend } = useContext(FriendContext)
    const [enteredFriend, setEnteredFriend] = useState('')
    const myUserId = +localStorage.getItem("activeUser")

    const checkIfFriend = () => {
        // IF YOU ARE NOT ON MY FRIENDS LIST
        // PASS YOUR ID INTO THE CONSTRUCT FRIEND OBJ
        friends.find(friend => {
            // console.log(friend)
           if (friend !== enteredFriend) {
            //    console.log("YOUR NOT ON MY FRIENDS LIST")
           }
        })
    }

    const constructFriendObj = (userId) => {
        {
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
                            checkIfFriend()
                        }}>Add</Form.Button>
            </Form.Field>
        </Form>
    )
}