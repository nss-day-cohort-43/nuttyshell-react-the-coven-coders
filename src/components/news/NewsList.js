import React, { useContext, useEffect } from "react";
import { NewsContext, addNews } from "./NewsProvider";
import { NewsCard } from "./NewsCard";

export const NewsList = (props) => {
  const { news, getNews } = useContext(NewsContext);


  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <h2>News</h2>
      <div className="news">
        {news.map((article) => {
          return <NewsCard key={article.title} article={article} />;
        })}
      </div>
    </>
  );
};