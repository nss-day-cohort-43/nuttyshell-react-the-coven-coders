import React, { useRef, useContext } from "react"
import { PostContext } from "./PostProvider"
import { Form } from "semantic-ui-react"

export const PostForm = () => {
    const { addPost } = useContext(PostContext)
    const [enteredPost, setEnteredPost] = useState('')

    const userId = +localStorage.getItem("activeUser")

    const constructPostObj = () => {
        addPost({
            post: post.current.value,
            originalTimeStamp: Date.now(),
            editedTimeStamp: 0,
            userId
        })
    }

    return (
        <Form>
            <Form.Field>
            <Form.TextArea className="new__textarea" key="newPost" label='Create New Post' value='enteredPost' placeholder='Say sumthin witchy' />
            <Form.Button className="new__btn-post" onClick={
            (event) => {
                constructPostObj()
            }}>Submit</Form.Button>
            </Form.Field>
        </Form>
    )
}
