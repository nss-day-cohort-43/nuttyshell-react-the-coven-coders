import React, { useContext, useEffect } from "react";
import { NewsContext } from "./NewsProvider";
import { NewsCard } from "./NewsCard";
import { Button, Icon } from 'semantic-ui-react'

export const NewsList = (props) => {
  const { news, getNews } = useContext(NewsContext);
    
  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="container">
      <h2>News</h2>
      <Button>
        <Icon name='add' />
    </Button>
      <div className="news">
        {news.map((article) => {
          return <NewsCard key={article.title} article={article} />;
        })}
      </div>
    </section>
  );
};