import React from "react"

export const NewsCard = ({ article }) => (
    <section className="news">
        <h3 className="news__title">{ article.title }</h3>
        <div className="news__synopsis">{ article.synopsis }</div>
    </section>
)
