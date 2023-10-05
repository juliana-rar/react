import React from 'react';
import { Link } from 'react-router-dom';

const baseUrl = import.meta.env.BASE_URL || '';

export const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div className="article-container" key={index}>
          <div className="img-container">
            {article.image && (
              article.image.startsWith('http') ? (
                <img src={article.image} alt={article.title} />
              ) : (
                <img src={`${baseUrl}../../src/assets/images/${article.image}`} alt={article.title} />
              )
            )}
          </div>
          <div className="article-body">
          <Link to={`/news/${article.id}`}> 
            <h2>{article.title}</h2>
            </Link>
            <p>{article.description}</p>
            <div className="article-footer">
              <span>{article.date} · </span>
              <span>{article.ReadingTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
