// src/Article.js
import React from "react";

function Article({ date, title, image, altText, content }) {
  return (
    <article>
      <time dateTime={date.replace("/", "-")}>{date}</time>
      <h2>{title}</h2>
      <img src={image} alt={altText} />
      <p>
        <span className="dropcap">{content[0]}</span>{content.slice(1)}
      </p>
      <a href="#" className="continue">Continues ...</a>
    </article>
  );
}

export default Article;
