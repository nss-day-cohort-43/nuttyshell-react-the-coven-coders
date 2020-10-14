import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal, Form, Header} from 'semantic-ui-react'
import { PostContext } from './PostProvider'
import { CheckDate } from './CheckDate'

export const PublicPosts = () => {
    const { posts, getPosts, editPost, removePost } = useContext(PostContext)
    const activeUser = +localStorage.getItem("activeUser")
    const [saved, setSaved] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);
    const [post, setPost] = useState("")

    useEffect(() => {
        getPosts()
	}, [])
    
    function handleSubmit(e) {
        e.preventDefault();
        setModalOpened(false)
        setSaved(true);
    }


    const edit = () => {
        editPost({
            post,
            originalTimeStamp: 1601388696301,
            editedTimeStamp: Date.now(),
            userId: 1
          })
    }
    
    const UpdatePost = (props) => {
      return (
        <Modal
            open={modalOpened}
            as={Form}
            onSubmit={e => handleSubmit(e)}
            size="tiny"
            trigger={<button onClick={() => {
                console.log(props)
                setPost(props.post.post)
               setModalOpened(true) 
            }}
            className="mini ui icon button"><i className="edit icon"></i></button>}>    
        <Header icon="pencil" content="Edit Your Post" as="h2" />
        <Modal.Content>
          <Form.Input label="Post" required type="text" placeholder="Your post goes here" value={post} onChange={event => setPost(event.target.value)}/>
          {saved ? <div>Saved!</div> : null}
        </Modal.Content>
        <Modal.Actions>
          <Button type="submit" color="red" icon="times" content="Close" onClick={() => setModalOpened(false)}/>
          <Button type="submit" color="green" icon="save" content="Save" 
          onClick={edit}/>
        </Modal.Actions>
      </Modal>
      )
    }

    const ActiveUserPosts = ({post}) => (
        <p className="post__single single__active">
            <span className="single__username">{post.user.username}  -</span>
            <CheckDate key={post.id} post={post}/>
            <span className="single__post">{post.post}</span> 
            <UpdatePost key={post.id} post={post}/>
            <button className="mini ui icon button" onClick={
				() => {
					removePost(post.id)
				}}>
                    <i className="trash icon"></i>
            </button>
        </p>
    )

    const OtherUserPosts = ({post}) => (
        <p className="post__single">
            <span className="single__username">{post.user.username}  -</span>
            <CheckDate key={post.id} post={post}/>            
            <span className="single__post">{post.post}</span>
        </p>
    )

    return (
        <>
            <h2 className="postHeader">Posts</h2>
            <div className="post__list">
                {
                    posts.map(post => {
                        if (activeUser === post.userId) {
                            return <ActiveUserPosts key={post.id} post={post}/>
                            
                        } else {
                            return <OtherUserPosts key={post.id} post={post}/>
                        }
                    })
                }
            </div>
        </>
    )
}
