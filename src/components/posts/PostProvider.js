import React, { useState, createContext } from "react"

export const PostContext = createContext()

/*
 This component establishes what data can be used.
 */
export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch ('http://localhost:8088/posts?_expand=user')
            .then(response => response.json())
            .then(setPosts)
    }
    
    const addPost = postObj => {
        return fetch ('http://localhost:8088/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
            .then(getPosts)
    }

    const getPostById = id => {
        return fetch(`http://localhost:8088/posts/${id}?_expand=users`)
            .then(res => res.json())
    }

    const removePost = PostId => {
        return fetch(`http://localhost:8088/posts/${PostId}`, {
            method: "DELETE"
        })
            .then(getPosts)
    }

    return (
        <PostContext.Provider value={{
            posts, getPosts, addPost, getPostById, removePost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}