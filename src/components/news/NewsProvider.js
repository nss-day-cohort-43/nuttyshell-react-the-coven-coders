import React, { useState, createContext } from "react"

export const NewsContext = createContext()

export const NewsProvider = (props) => {
    const [news, setNews] = useState([]) 

    const getNews = () => {
        return fetch("http://localhost:8088/news")
            .then(res => res.json())
            .then(setNews)
    }
    
    const addNews = newsEntry => {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsEntry)
        })
    }
   
    return (
        <NewsContext.Provider value={{
            news, getNews, addNews
        }}>
            {props.children}
        </NewsContext.Provider>
    )

}