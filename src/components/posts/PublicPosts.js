import React, { useContext, useEffect } from 'react'
import { PostContext } from './PostProvider'

export const PublicPosts = () => {
    const { posts, getPosts } = useContext(PostContext)
    const activeUser = localStorage.getItem("activeUser")

    useEffect(() => {
        getPosts()
    }, [])

    const checkDate = (post) => {
        const originalTimeStamp = `<span class="single__originalTimeStamp">posted at ${new Date(post.originalTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} -</span>`
        const editedTimeStamp = `<span class="single__editedTimeStamp">edited at ${new Date(post.editedTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} -</span>`
        
        return (post.editedTimeStamp === 0 ? `${originalTimeStamp}` : `${originalTimeStamp} ${editedTimeStamp}`)
    }

    return (
        <>
            <h2 className="postHeader">Posts</h2>
            <div className="post__list">
                {
                    posts.map(post => {
                        // To reduce repeated strings, store username in variable
                        const username = <span key={post.user.id} className="single__username">{post.user.username}</span>

                        if (activeUser === post.userId) {
                            return (
                            <p key={post.id} className="post__single single__active">
                                {username}
                                {checkDate(post)}
                                <span className="single__post">{post.post}</span> <button type="button">✎</button>
                                <button type="button">✘</button>
                            </p>
                            )
                        } else {
                            return (
                            <p key={post.id} className="post__single">
                                {username}
                                {checkDate(post)}
                                <span className="single__post">{post.post}</span>
                            </p>
                            )
                        }
                    }).join("")
                }
            </div>
        </>
    )
}
