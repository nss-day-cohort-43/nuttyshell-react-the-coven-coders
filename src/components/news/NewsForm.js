import React, { useContext, useRef, useEffect } from "react"
import { NewsContext } from "./NewsProvider"

export const NewsForm = (props) => {
    const { addNews } = useContext(NewsContext)

    const title = useRef(null)
    const synopsis = useRef(null)
    const url = useRef(null)

    const constructNewArticle = () => {
     
        addNews({
                title: title.current.value,
                synopsis: synopsis.current.value,
                url: url.current.value,
            })
        }
    
    return (
        <form className="newsForm">
            <h2 className="newsForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleTitle">Article Title: </label>
                    <input type="text" id="articleTitle" ref={title} required autoFocus className="form-control" placeholder="Article title" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleSynopsis">Synopsis: </label>
                    <input type="text" id="articleSynopsis" ref={synopsis} className="form-control" placeholder="Synopsis" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleURL">URL: </label>
                    <input type="text" id="articleURL" ref={url} className="form-control" placeholder="URL" />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewArticle()
                }}
                className="btn btn-primary">
                Save Article
            </button>
        </form>
    )
}