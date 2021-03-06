import React, { useState, useContext } from "react"
import { PostContext } from "./PostProvider"
import { Form } from "semantic-ui-react"

export const PostForm = () => {
    const { addPost } = useContext(PostContext)
    const [enteredPost, setEnteredPost] = useState('')

    const userId = +localStorage.getItem("activeUser")

    const constructPostObj = () => {
        if (enteredPost !== "") {
            addPost({
                post: enteredPost,
                originalTimeStamp: Date.now(),
                editedTimeStamp: 0,
                userId
            })
            setEnteredPost('')
        }
    }

    return (
        <Form>
            <Form.Field>
            <Form.TextArea className="new__textarea" key="newPost" label='Create New Post' value={enteredPost}
            //This is a two way binding event 
            onChange={event => setEnteredPost(event.target.value)} placeholder='Say sumthin witchy' />
            <Form.Button className="new__btn-post" 
            onClick={
                () => {
                    constructPostObj()
                }}>Submit</Form.Button>
            </Form.Field>
        </Form>
    )
}
