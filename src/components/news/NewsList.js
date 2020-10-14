import React, { useContext, useEffect } from "react";
import { NewsContext } from "./NewsProvider";
import { NewsCard } from "./NewsCard";
import { Button, Icon } from 'semantic-ui-react'
import { NewsForm } from "./NewsForm";

export const NewsList = (props) => {
  const { news, getNews } = useContext(NewsContext);

  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="container">
      <h2>News<Button size='mini' floated='right' onClick={() => <NewsForm />}>
        <Icon fitted name='add'/>
      </Button></h2>
      
      <div className="news">
        {news.map((article) => {
            if (article.userId === activeUser) {
                return <NewsCard key={article.id} article={article} />;
            }
        })}
      </div>
    </section>
  );
};