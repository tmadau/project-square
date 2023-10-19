import React from 'react';
import './article.scss';

const ArticleContent = ({ imageURL, title, description }) => {
  return (
    <article>
      <img src={imageURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default ArticleContent;