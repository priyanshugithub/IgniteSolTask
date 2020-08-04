import React from 'react';
import './card.styles.css';

const Card = ({ img, title, author }) => {
  return (
    <div>
      <img src={img} alt='books' className="book-image" />
      <div>
        <h2 className="book-info">{title}</h2>
        <p className="book-info">{author}</p>
      </div>
    </div>
  );
}

export default Card;