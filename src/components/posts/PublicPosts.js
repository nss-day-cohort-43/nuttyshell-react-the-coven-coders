import React, { useContext, useEffect } from 'react'
import { PostContext } from './PostProvider'

export const PublicPosts = () => {
    const { posts, getPosts } = useContext(PostContext)
    const activeUser = +localStorage.getItem("activeUser")

    useEffect(() => {
        getPosts()
    }, [])

    const CheckDate = (post) => {
        console.log(post)
        const OriginalTimeStamp = <span className="single__originalTimeStamp">posted at {new Date(post.post.originalTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} -</span>
        const EditedTimeStamp = <span className="single__editedTimeStamp">edited at {new Date(post.post.editedTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} -</span>
        console.log(post.post.editedTimeStamp)
        return (post.post.editedTimeStamp === 0 ? [OriginalTimeStamp] : [OriginalTimeStamp], [EditedTimeStamp])
    }
    

    const ActiveUserPosts = ({post}) => (
        <p className="post__single single__active">
            <span className="single__username">{post.user.username}</span>
            <CheckDate key={post.id} post={post}/>
            <span className="single__post">{post.post}</span> <button type="button">✎</button>
            <button type="button">✘</button>
        </p>
    )

    const OtherUserPosts = ({post}) => (
        <p className="post__single">
            <span className="single__username">{post.user.username}</span>
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
                        // To reduce repeated strings, store username in variable
console.log(post.post)
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
